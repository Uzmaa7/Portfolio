import Image from "next/image"

interface ProjectCardProps {
    title: string;
    description: string;
    mediaPath: string; // video or image
    isVideo?: boolean;
}

export default function ProjectCard({ mediaPath, isVideo, title, description }: ProjectCardProps) {
    return (
        
    )
}