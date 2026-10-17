from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
import json
root=Path(__file__).parent/'dist'
class Document(HTMLParser):
    def __init__(self):
        super().__init__();self.ids=set();self.links=[];self.h1=0;self.canonical=[];self.images=[];self.title=False;self.description=False;self.schema=False
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if tag=='h1':self.h1+=1
        if tag=='title':self.title=True
        if tag=='meta' and a.get('name')=='description' and a.get('content'):self.description=True
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if tag=='a' and a.get('href'):self.links.append(a['href'])
        if tag=='img':self.images.append(a);self.links.append(a.get('src',''))
        if tag=='script' and a.get('type')=='application/ld+json':self.schema=True
docs={}
for path in root.rglob('*.html'):
    d=Document();d.feed(path.read_text(encoding='utf-8'));docs[path]=d
errors=[]
for path,d in docs.items():
    rel=str(path.relative_to(root))
    if d.h1!=1:errors.append(rel+': needs exactly one h1')
    if not(d.title and d.description and len(d.canonical)==1):errors.append(rel+': missing SEO metadata')
    for image in d.images:
        if not image.get('alt'):errors.append(rel+': missing image alt')
    for href in d.links:
        u=urlsplit(href)
        if u.scheme or u.netloc:continue
        target=(root/unquote(u.path.lstrip('/'))) if u.path.startswith('/') else path.parent/unquote(u.path)
        if not u.path:target=path
        if target.is_dir():target=target/'index.html'
        if not target.exists():errors.append(rel+': missing '+href);continue
        if u.fragment and target in docs and u.fragment not in docs[target].ids:errors.append(rel+': missing anchor '+href)
assert docs[root/'index.html'].schema
assert (root/'sitemap.xml').exists() and (root/'robots.txt').exists()
assert (root/'assets/social-card.png').exists()
assert not errors,errors
print(json.dumps({'pages_checked':len(docs),'internal_links_and_anchors':'passed','metadata_and_alt_text':'passed','profile_schema':'present','sitemap_and_robots':'present'},indent=2))
