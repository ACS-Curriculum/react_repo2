const menuItems = [
  { title: "Home", to: "/" },

  { 
    title: "Teaching", 
    children: [
      { title: "CS Classes", to: "/code" },
      { title: "Language Arts", to: "/experiment" },
      { title: "Resources", to: "/resources" }
    ]
  },

  { 
    title: "Sketches", 
    children: [
      { title: "Hearts", to: "/hearts" },
      { title: "Circle-Pack", to: "/circle-pack" },
      { title: "Experiment", to: "/experiment" },
      { 
        title: "Generative Art", 
        children: [
          { title: "Circles", to: "/data/trees/binary" },
          { title: "Matricies", to: "/data/trees/avl" }
        ] 
      }
    ]
  },

  { 
    title: "DataViz", 
    children: [
      { title: "Team", to: "/about/team" },
      { title: "Careers", to: "/about/careers" }
    ]
  },

  { 
    title: "Data Structures", 
    children: [
      { title: "Sets", to: "/data/sets" }, 
      { title: "Maps", to: "/data/maps" }, 
      { 
        title: "Trees", 
        children: [
          { title: "Binary Trees", to: "/data/trees/binary" },
          { title: "AVL Trees", to: "/data/trees/avl" }
        ] 
      }
    ]
  },

  { title: "Contact", to: "/contact" }
];

export default menuItems;
