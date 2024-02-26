import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="h-full bg-[#111217]">
                {children}
            </main>
        </div>
    );
}
 
export default MarketingLayout;