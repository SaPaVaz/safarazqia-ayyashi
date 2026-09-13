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
    role: "Content Creator & Designer & Developer",
    name: "Safaraz Qia",
    overview: "I am a passionate frontend developer with experience in creating modern web applications, and I am a new content creator.",
    cvUrl: "https://example.com/cv",
    watsappUrl: "https://wa.me/1234567890"
};

export const about: About = {
    heading: "Story With Passion",
    description: "I am focused to be a content creator and I am make content for I post in Instagram",
    skills: [
        {
            icon: GlobeAltIcon,
            title: "Content Creator",
            description: "I am focused to, Content Creator, and I want up my account in instagram.",
        },
        {
            icon: CircleStackIcon,
            title: "Developer",
            description: "I am just student a developer, and make web aplication like website portofolio and other web aplication, and I want up my skill in developer.",
        },
        {
            icon: CloudIcon,
            title: "Designer",
            description: "I am a just beginner designer, and I want up my skill again in designer.",
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
    heading: "My Project in Scholl",
    items: [
        {
            title: "Project 1",
            description: "Description of Project 1",
            imageUrl: "/img/7.png",
            projectUrl: "https://example.com/project1"
        },
        {
            title: "Project 2",
            description: "Description of Project 1",
            imageUrl: "/img/8.png",
            projectUrl: "https://example.com/project1"
        },
        {
            title: "Project 3",
            description: "Description of Project 1",
            imageUrl: "/img/5.png",
            projectUrl: "https://example.com/project1"
        },
        {
            title: "Project 4",
            description: "Description of Project 1",
            imageUrl: "/img/6.png",
            projectUrl: "https://example.com/project1"
        },
    ],
};

export const learning: Learning = {
    heading: "Learning",
    description: "I am constantly learning and improving my skills in frontend development, content developer, and designer.",
    items: [
        {
            icon: BuildingLibraryIcon,
            title: "Jaz Academy",
            description: "I am Learning at Jaz Academy, where I am gaining knowledge and experience in frontend development.",
        },
        {
            icon: AcademicCapIcon,
            title: "Jaz Academy Courses Developer",
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
            icon: UserCircleIcon,
            platform: "Instagram",
            url: "https://www.instagram.com/safaraz__qy/"
        },
        {
            icon: PlayIcon,
            platform: "LinkedIn",
            url: "https://linkedin.com/in/example"
        },
        {
            icon: PlayIcon,
            platform: "GitHub",
            url: "https://github.com/SaPaVaz"
        },
    ]
}