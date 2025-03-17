export const deepTransformMenuData =(data:any)=>{
    // return data.map(item => {
    //     const formatted = {
    //       title: item.meta.title,
    //       name: item.name,
    //       path: item.path,
    //       icon: item.meta.icon,
          
    //     };
    
    //     if (item.children) {
    //       (formatted as any).children = deepTransformMenuData(item.children.map(child => ({
    //         ...child,
    //         path: `${item.path}/${child.path}`.replace(/\/\//g, '/') // 自动继承父路径
    //       })));
    //     }
    
    //     return formatted;
    //   });
}


  