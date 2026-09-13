import { 
    PlayIcon, 
    GlobeAltIcon, 
    CircleStackIcon, 
    CloudIcon, 
    BuildingLibraryIcon, 
    AcademicCapIcon,
    CommandLineIcon,
    CameraIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

import type { About, Profile, Stats, Project, Learning, Contact, } from "./types";

export const profile: Profile = {
    role: "Content Creator & Programmer",
    name: "Safaraz Qia",
    overview: "I am a passionate frontend developer with experience in creating modern web applications.",
    cvUrl: "https://example.com/cv",
    watsappUrl: "https://wa.me/1234567890"
};

export const about: About = {
    heading: "Story With Passion",
    description: "I am a frontend developer with a strong passion for creating beautiful and functional web applications. I have experience in various frontend technologies and frameworks.",
    skills: [
        {
            icon: GlobeAltIcon,
            title: "Content Creator",
            description: "I specialize in creating engaging content for various platforms.",
        },
        {
            icon: CircleStackIcon,
            title: "Developer",
            description: "I specialize in building engaging, dev-focused content across various platforms and tech ecosystems.",
        },
        {
            icon: CloudIcon,
            title: "Content Creator",
            description: "I specialize in creating engaging content for various platforms.",
        },
    ],
    imageUrl: "/img/2.png"
};

export const stats: Stats[] = [
    {
        title: "Projects",
        value: 15,
    },
    {
        title: "Clients",
        value: 10,
    },
    {
        title: "Wards",
        value: 5,
    },
];

export const projects: Project = {
    heading: "My Projects",
    items: [
        {
            title: "Project 1",
            description: "Description of Project 1",
            imageUrl: "/img/1.png",
            projectUrl: "https://example.com/project1"
        },
        {
            title: "Project 2",
            description: "Description of Project 1",
            imageUrl: "/img/2.png",
            projectUrl: "https://example.com/project1"
        },
        {
            title: "Project 3",
            description: "Description of Project 1",
            imageUrl: "/img/3.jpg",
            projectUrl: "https://example.com/project1"
        },
        {
            title: "Project 4",
            description: "Description of Project 1",
            imageUrl: "/img/3.jpg",
            projectUrl: "https://example.com/project1"
        },
    ],
};

export const learning: Learning = {
    heading: "Learning",
    description: "I am constantly learning and improving my skills in frontend development.",
    items: [
        {
            icon: BuildingLibraryIcon,
            title: "Jaz Academy",
            description: "I am Learning at Jaz Academy, where I am gaining knowledge and experience in frontend development.",
        },
        {
            icon: AcademicCapIcon,
            title: "Jaz Academy CoursesDeveloper",
            description: "I am a developer for Jaz Academy courses, where I contribute to the development of educational content and resources for learners.",
        },
        {
            icon: UserCircleIcon,
            title: "Jaz Academy Courses Media Social",
            description: "I manage the social media presence for Jaz Academy courses, ensuring that learners stay updated with the latest content and resources.",
        },
        {
            icon: CameraIcon,
            title: "Jaz Academy Courses Content Creator",
            description: "I create engaging content for Jaz Academy courses, helping learners understand complex concepts in frontend development.",
        }
    ], 
}

export const contact: Contact = {
    heading: "Contact Me",
    description: "Feel free to reach out to me for any inquiries or collaborations opportunities.",
    email: "safarazqiaa@gmail.com",
    phone: "+62 851-3579-1453",
    address: "123 Main St, City, Country",
    socialLinks: [
        {
            icon: PlayIcon,
            platform: "Website",
            url: "https://example.com"
        },
        {
            icon: PlayIcon,
            platform: "LinkedIn",
            url: "https://linkedin.com/in/example"
        },
        {
            icon: PlayIcon,
            platform: "Twitter",
            url: "https://twitter.com/example"
        },
    ]
}