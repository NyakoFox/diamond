import ButtonLink from "../components/ButtonLink";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Projects</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Keep in mind I have two separate GitHub accounts.</p>
            <p className="text-gray-600 dark:text-gray-300 text-center">There would be wayyyy more here, but most of my projects are not actually finished.</p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 mb-16">
                <ButtonLink to="https://github.com/NyakoFox" outside>
                    GitHub
                </ButtonLink>
            </div>
            <div className="ml-16 mr-16 grid grid-cols-3 gap-16 mb-16">
                <ProjectCard className="dark:bg-[url('/project_cards/kristal.gif')] bg-cover bg-center" title="Kristal" description="A DELTARUNE fangame engine written in LÖVE." link="https://kristal.cc/" outside />
                <ProjectCard title="Diamond" description="This website, written in React." link="https://github.com/NyakoFox/diamond" outside />
                <ProjectCard className="dark:bg-[url('/project_cards/allymoe.jpg')] bg-cover bg-center bg-blend-multiply" title="ally.moe" description="My old website." link="https://ally.moe/" outside />
                <ProjectCard title="Sparked" description="A small game written in Processing for a highschool project." link="https://github.com/NyakoFox/Platformer" outside />
                <ProjectCard title="NyakoMod" description="A Minecraft mod containing whatever I feel like adding. It's a joke mod, with way too much effort put into it." link="https://github.com/NyakoFox/NyakoMod" outside />
                <ProjectCard title="VanitySlots" description="A Minecraft mod which adds slots for vanity armor." link="https://github.com/NyakoFox/VanitySlots" outside />
                <ProjectCard title="VeinDigging" description="A Minecraft mod which adds vein mining to modern Minecraft." link="https://github.com/NyakoFox/VeinDigging" outside />
                <ProjectCard title="Cropped" description="A Minecraft mod which has QOL improvements for crops." link="https://github.com/NyakoFox/Cropped" outside />
                <ProjectCard title="ItemRename" description="A Minecraft mod which allows you to rename items, and add lore to them, using PlaceholderAPI formatting." link="https://github.com/NyakoFox/ItemRename" outside />
                <ProjectCard title="Singularity" description="A Kitchen-sink Minecraft mod which adds a bunch of random stuff." link="https://github.com/NyakoFox/Singularity" outside />
                <ProjectCard title="VVVVVV Textbox Generator" description="A tool to generate VVVVVV-styled textboxes, with extreme accuracy." link="https://github.com/AllyTally/VVVVVV-Text" outside />
                <ProjectCard title="Terminal" description="A Discord bot for the VVVVVV Discord server." nolink />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-16">Contributions:</h2>
            <div className="ml-16 mr-16 grid grid-cols-3 gap-16 mb-16">
                <ProjectCard className="dark:bg-[url('/project_cards/vvvvvv.jpg')] bg-cover bg-center bg-blend-multiply" title="VVVVVV" description="A retro-styled platformer game where you flip gravity." link="https://github.com/TerryCavanagh/VVVVVV/commits?author=AllyTally" outside />
                <ProjectCard title="UndertaleModTool" description="A modding tool for games made with GameMaker." link="https://github.com/krzys-h/UndertaleModTool/commits?author=NyakoFox" outside />
                <ProjectCard title="Create Your Frisk" description="An UNDERTALE fangame engine." link="https://github.com/RhenaudTheLukark/CreateYourFrisk/commits/feature065?author=AllyTally" outside />
                <ProjectCard title="Ved" description="A VVVVVV level editor." link="https://gitgud.io/Dav999/ved/-/commits/master?author=AllyTally" outside />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-16">Upcoming Projects:</h2>
            <div className="ml-16 mr-16 grid grid-cols-3 gap-16 mb-16">
                <ProjectCard title="Niveaux" description="An online VVVVVV level database." nolink />
                <ProjectCard title="Grass (Working Title)" description="A platformer video game." nolink />
            </div>
        </div>
    )
}

export default Projects;