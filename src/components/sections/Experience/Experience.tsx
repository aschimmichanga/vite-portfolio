import BubbleStack from "./BubbleStack";

function Experience() {
    return (
        <div className="h-screen w-screen flex items-center justify-start pl-10 md:pl-20">
            <div className="text-white text-4xl font-space-mono pt-[10px] w-1/3 leading-normal">
                <span>I've bridged gaps between product and design at companies big and small, reaching over </span>
                <span className="font-bold text-fuchsia-200">1 billion users</span>
            </div>
            <BubbleStack />
        </div>
    );
}

export default Experience;
