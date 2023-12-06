
// Function to get data in JSON format
function getTitle() {
  const data = {
    title: "hi, my name is Marco",
    subtitle: "data, AI and cloud enthusiast",
  };
  return JSON.stringify(data);
}

function getSkills() {
    const data = {
      skill1: {
        name: "AI & Data",
        description: "I am passionate about data and AI. I have experience in data analysis, machine learning and deep learning. I am also interested in the ethical implications of AI.",
      },
      skill2: {
        name: "Cloud Technologies",
        description: "I am interested in cloud and virtualization technologies. I have experience in cloud computing, virtualization and containerization.",
      },
      skill3: {
        name: "Information Security",
        description: "I like to delve into Information systems security. I have experience in cryptography, network security and ethical hacking.",
      },
      skill4: {
        name: "Python Software Development",
        description: "I have acquired experience in software development with Python. I have experience in web development, data analysis, machine learning and deep learning.",
      },
      skill5: {
        name: "Web Development",
        description: "I have acquired practical knowledge about Web Development. I have experience in HTML, CSS, JavaScript, React and TailwindCSS.",
      }
    };
    return JSON.stringify(data);
}

function getProjects() {
    const data = {
      skill1: "AI & Data",
      skill2: "Cloud Technologies",
      skill3: "Information Security",
    };
    return JSON.stringify(data);
}

function getContacts() {
    const data = {
      mail: "mrcdalmo@gmail.com",
      linkedin: "linkedin.com/in/marco-dalmo/",
      github: "github.com/moDal7",
    };
    return JSON.stringify(data);
}

  

export {
  getTitle,
  getSkills,
  getProjects,
  getContacts
};
