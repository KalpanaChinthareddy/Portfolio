import trophy from "@/app/assets/trophy.png"
import star from "@/app/assets/star.png"
import medal from "@/app/assets/medal.png"
export default function Achievements(){
    const achievements =[
        {
            id:1,
            competition:"CSHACK2022(SNIST)",
            description:"Got 1st Place in CSHACK2022 Hackathon (Sreenidhi Institute of Science and Technology)",
            image:trophy
        },
        {
            id:2,
            competition:"Hackerrank,Leetcode,Codechef",
            description:"Actively solved 300+ problems on coding platforms like CodeChef, LeetCode, and HackerRank, sharpening problemsolving skills",
            image:star
        },
        {
            id:3,
            competition:"Hackerrank",
            description:"Earned Gold-level badge in Problem-Solving",
            image:medal
        },
        
    ];
    return(
        <div className="bg-white dark:bg-black text-black dark:text-white py-10" id="achievements">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
                <h2 className="text-4xl font-bold text-center mb-12">My Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {achievements.map((achieve) => (
                        <div 
                            key={achieve.id} 
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
                            transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
                        >
                            <img
                        src={achieve.image.src}
                        alt={achieve.competition}
                        className="w-16 h-16 object-cover"
                        />
                            <h3 className="mt-4 text-xl font-bold text-green-500">{achieve.competition}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">{achieve.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}