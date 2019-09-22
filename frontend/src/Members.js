var bios = new Map([

  ["David Curry", "As president, David helps to create workshops, organize\
    socials, and leads our team to compete in the SpaceX Hyperloop competition."],

  ["David Yee", "As VP of Mechanical Engineering, David helps oversees the\
    engineering subteams and mentors our technical leads."],

  ["Bill Patterson", "As VP of Electrical Engineering, helps oversee the\
    electrical engineeing subteams and mentors our technical leads."],

  ["Adnan Armouti", "As External VP, Adnan works with business team members to\
    help finance our endeavors and build a wide network for our organization."],

  ["Matthew Ko", "As Web Development Lead, Matthew designed and developed the\
    Bruin Hyperloop website and manages our web applications."],

  ["Jordan Huynh", "As Breaking Lead, Jordan develops our pneumatic braking\
    system and ensures the pod can brake reliably in case of malfunction."],

  ["Savya Agarwal", "As Structures Lead, Savya is in charge of designing the\
    pod's chassis and helps integrate them with other subsystems."],

  ["Sam Ellison", "As Vertical Suspension Lead, Sam designs the vertical\
    suspension system for the wheels and helps integrate it with the rest of the pod."
],

  ["Casimir Vinciguerra", "As Propulsion lead, Casimir is responsible for\
    designing and developing the pod's wheels, motors, and motor controllers."],

  ["Cassidy Pensa", "As Stability Lead, Cassidy is in charge of designing the\
    horizontal suspension system with the I-beam to provide lateral stability."],

  ["Anthony Mamakos", "As power lead, Anthony is responsible for designing\
    voltage systems that are safe and help power the pod's motors and electronic\
    boards."],

  ["Harrison Cassar", "As Software Lead, Harrison is in charge of \
    developing a pod health viewer for processing and display of\
    data gathered by the pod. "]

]);


const board = [

  {
   name: "David Curry",
   position: "President",
   imgURL: "/david_curry.jpg",
   linkedinURL: "https://www.linkedin.com/in/dcurry2",
   bio: bios.get("David Curry"),
   major: "Aerospace Engineering",
   class: "2020",
  },

  {
    name: "Adnan Armouti",
    position: "External VP",
    imgURL: "/adnan_armouti.jpg",
    linkedinURL:"https://www.linkedin.com/in/adnan-armouti",
    bio: bios.get("Adnan Armouti"),
    major: "Electrical Engineering",
    class: "2021",
  },

  {
    name: "David Yee",
    position: "VP of Mechanical Engineering",
    imgURL: "/david_yee.jpg",
    linkedinURL: "https://www.linkedin.com/in/dyee",
    bio: bios.get("David Yee"),
    major: "Mechanical Engineering",
    class: "2020"
  },

  {
    name: "Bill Patterson",
    position: "VP of Electrical Engineering",
    imgURL: "/bill_patterson.jpg",
    linkedinURL: "https://www.linkedin.com/in/bill-p-b9199b122",
    bio: bios.get("Bill Patterson"),
    major: "Electrical Engineering",
    class: "2021"
  },
];

const leads = [
  {
    name: "Matthew Ko",
    position: "Web Development Lead",
    imgURL: "/matthew_ko.jpg",
    linkedinURL: "https://www.linkedin.com/in/matthew-m-ko",
    bio: bios.get("Matthew Ko"),
    major: "Computer Science",
    class: "2021"
  },

  {
    name: "Jordan Huynh",
    position: "Braking Lead",
    imgURL: "/jordan_huynh.jpg",
    linkedinURL: "https://www.linkedin.com/in/jordan-huynh-17a679167",
    bio: bios.get("Jordan Huynh"),
    major: "Civil Engineering",
    class: "2021"
  },

  {
    name: "Harrison Cassar",
    position: "Software Lead",
    imgURL: "/harrison_cassar.jpg",
    linkedinURL: "https://www.linkedin.com/in/harrisoncassar",
    bio: bios.get("Harrison Cassar"),
    major: "Computer Science",
    class: "2022"
  },

  {
    name: "Savya Agarwal",
    position: "Structures Lead",
    imgURL: "/savya_agarwal.jpg",
    linkedinURL: "https://www.linkedin.com/in/savya-agarwal-ba5836164",
    bio: bios.get("Savya Agarwal"),
    major: "Mechanical Engineering",
    class: "2021"
  },

  {
    name: "Sam Ellison",
    position: "Vertical Suspension Lead",
    imgURL: "/sam_ellison.jpg",
    linkedinURL: "https://www.linkedin.com/in/samuel-ellison-726231173",
    bio: bios.get("Sam Ellison"),
    major: "Mechanical Engineering",
    class: "2021"
  },

  {
    name: "Cassidy Pensa",
    position: "Stability Lead",
    imgURL: "/cassidy_pensa.jpg",
    linkedinURL: "https://www.linkedin.com/in/cassidypensa",
    bio: bios.get("Cassidy Pensa"),
    major: "Mechanical Engineering",
    class: "2021"
  },

  {
    name: "Casimir Vinciguerra",
    position: "Propulsion Lead",
    imgURL: "/casimir_vinciguerra.jpg",
    linkedinURL: "https://www.linkedin.com/in/casimir-vinciguerra",
    bio: bios.get("Casimir Vinciguerra"),
    major: "Mechanical Engineering",
    class: "2021"
  },

  {
    name: "Anthony Mamakos",
    position: "Power Lead",
    imgURL: "/anthony_mamakos.jpg",
    linkedinURL: "https://www.linkedin.com/in/anthony-mamakos",
    bio: bios.get("Anthony Mamakos"),
    major: "Applied Math",
    class: "2021"
  }
];

const images = [
  { id: 1, src: './assets/image01.jpg', title: 'foo', description: 'bar' },
];



exports.board = board;
exports.leads = leads;
