export const homeTitle='Atta Muhammad | Full-Stack Web & Mobile Developer, Karachi';
export const homeDescription='Atta Muhammad, a full-stack web and cross-platform mobile developer in Karachi. Explore MERN, Flask, Flutter and Firebase projects, live demos and case studies.';

const projectSearchCopy={
  'commecs-ai-assistant':{title:'Commecs AI Assistant — RAG Project | Atta Muhammad',description:'Explore Atta Muhammad’s multilingual college assistant built with React, TypeScript and RAG. Live demo, source code and documented features.'},
  'shape-up':{title:'Shape Up — MERN Fitness App | Atta Muhammad',description:'Atta Muhammad’s MERN fitness and nutrition application: React, Express and MongoDB. Explore the demo, source code and current project documentation.'},
  technova:{title:'TechNova — Flutter Shopping App | Atta Muhammad',description:'TechNova by Atta Muhammad: a Flutter and Firebase shopping application with an Android demo APK, browser demo, source code and documentation.'},
  edupredict:{title:'EduPredict — Python & Flask Analytics | Atta Muhammad',description:'EduPredict by Atta Muhammad: a Python and Flask educational analytics project with synthetic examples. Explore the demo, source and case study.'}
};
export const projectMetadata=project=>projectSearchCopy[project.slug]??{title:`${project.name} | Atta Muhammad’s Projects`,description:project.summary};

export function pageStructuredData(data,path,title,description,profile){
  if(path==='/404.html')return null;
  const origin=data.origin,personId=origin+'/#person',websiteId=origin+'/#website',pageUrl=origin+path,pageId=pageUrl+'#webpage';
  if(path==='/'){
    const {'@context':context,...profilePage}=profile;
    profilePage['@id']=pageId;profilePage.url=pageUrl;profilePage.name=title;profilePage.description=description;
    profilePage.dateModified=data.profileUpdatedAt;
    profilePage.inLanguage='en';profilePage.isPartOf={'@id':websiteId};
    profilePage.mainEntity.description='Atta Muhammad is a full-stack web and cross-platform mobile developer and Computer Science student based in Karachi, Pakistan.';
    profilePage.mainEntity.knowsAbout=['Web development','MERN stack','React','TypeScript','Node.js','Python','Flask','Flutter','Dart','Firebase','Retrieval-augmented generation'];
    return {'@context':'https://schema.org','@graph':[
      {'@type':'WebSite','@id':websiteId,url:pageUrl,name:data.name,alternateName:'Atta Muhammad Portfolio',inLanguage:'en',publisher:{'@id':personId}},
      profilePage
    ]};
  }
  const project=data.projects.find(p=>path===`/projects/${p.slug}/`);
  const label=project?.name??(path==='/journey/'?'Journey':'Notes & Updates');
  const breadcrumbId=pageUrl+'#breadcrumb';
  const webpage={'@type':path==='/journey/'?'AboutPage':'WebPage','@id':pageId,url:pageUrl,name:title,description,inLanguage:'en',isPartOf:{'@id':websiteId},about:{'@id':personId},author:{'@id':personId},breadcrumb:{'@id':breadcrumbId}};
  const graph=[{'@type':'Person','@id':personId,name:data.name,url:origin+'/',sameAs:[data.linkedin,data.github]},webpage,{'@type':'BreadcrumbList','@id':breadcrumbId,itemListElement:[
    {'@type':'ListItem',position:1,name:'Atta Muhammad',item:origin+'/'},
    {'@type':'ListItem',position:2,name:label,item:pageUrl}
  ]}];
  if(project){
    const projectId=pageUrl+'#project';webpage.mainEntity={'@id':projectId};
    graph.push({'@type':'CreativeWork','@id':projectId,name:project.name,url:pageUrl,description:project.summary,creator:{'@id':personId},sameAs:[project.live,project.source],keywords:project.stack.join(', ')});
  }
  return {'@context':'https://schema.org','@graph':graph};
}
