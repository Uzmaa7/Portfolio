import Image from "next/image"

interface ProjectCardProps {
    title: string;
    description: string;
    mediaPath: string; // video or image
    isVideo?: boolean;
}

export default function ProjectCard({ mediaPath, isVideo, title, description }: ProjectCardProps) {
    return (
        <div className="">
            {isVideo ? (
                <video
                    src={mediaPath}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-lg w-full h-auto object-cover border-2 border-white"
                />
            ) : (
                <img
                    src={mediaPath}
                    alt={title}
                    className="rounded-lg w-full h-auto object-cover border-2 border-white"
                />
            )}

            <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200">{title}</p>
            <p className="font-medium text-gray-400">{description}</p>
        </div>

    )
}