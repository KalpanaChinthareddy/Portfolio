import aicte from "@/app/assets/aicte.png";
import smart_interviews from "@/app/assets/smart_interviews.png";
import internshala from "@/app/assets/internshala.png";
import michigan from "@/app/assets/michigan.png";

export default function Certifications(){
    const certifications =[
        {
            id:1,
            name:"Smart Coder(Data Structures and Algorithms)",
            organization:"Smart Interviews",
            skills:"Data Structures, Algorithms",
            image:smart_interviews
        },
        {
            id:2,
            name:"AWS Cloud Virtual Internship",
            organization:"AICTE",
            skills:"AWS Cloud",
            image:aicte
        },
        {
            id:3,
            name:"AI-ML Virtual Internship",
            organization:"AICTE",
            skills:"Machine Learning",
            image:aicte
        },
        {
            id:4,
            name:"Python Programming",
            organization:"Internshala",
            skills:"Python",
            image:internshala
        },
        {
            id:5,
            name:"Introduction to HTML5",
            organization:"University of Michigan",
            skills:"HTML",
            image:michigan
        },
        {
            id:6,
            name:"Introduction to CSS3",
            organization:"University of Michigan",
            skills:"CSS",
            image:michigan
        },
    ];
    return(
        <div className="bg-white dark:bg-black text-black dark:text-white py-10" id="certifications">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
                <h2 className="text-4xl font-bold text-center mb-12">My Certifications</h2>
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
                        transition-transform duration-300 hover:scale-105 flex space-x-6"
                    >
                        <img
                        src={cert.image.src}
                        alt={cert.organization}
                        className="w-16 h-16 object-cover rounded-full"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-green-500">
                            {cert.organization}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 font-semibold">{cert.name}</p>
                            <p className="text-gray-800 dark:text-gray-200 ">Skills Earned: {cert.skills}</p>  
                        </div>
                        
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}