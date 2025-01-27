"use client"
import Card from "../sub/card";
import DisplayInfoCard from "../sub/displayInfoCard";
export default function page(){
 const contentCards=[{
   title:"CodeChef",
   description:"Hover To Reveal Rank",
   revealText:"1760",
   text:"My Rank"
 },{
  title:"CodeForces",
  description:"Hover To Reveal Title",
  revealText:"Pupil",
  text:"Title Attained"
 },{
  title:"LeetCode",
  description:"Hover To Reveal NoOfProbSolved",
  revealText:"242",
  text:"Problems Solved"
 },{
  title:"Github",
  description:"Hover To Reveal NoOfCommits",
  revealText:"62 in 2025",
  text:"No Of Commits"
 }]
 return <>
 <div className="h-screen w-screen" id="dsa">
  <div className="h-1/6 w-screen flex justify-center mb-20"><div> <span className="text-4xl">
  You thought I only did Web Development?,
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Here&apos;s Some DSA&CP to round things out!{" "}
            </div>
           </span>
    </div>
   </div>
  <div className="h-4/6 w-screen flex justify-center items-center">
    <div className="w-full h-full hidden sm:flex sm:w-1/2">
      <DisplayInfoCard ></DisplayInfoCard>
    </div>
    <div className="mt-80 w-full h-full flex flex-col sm:w-1/2">
      {contentCards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} revealText={card.revealText} text={card.text}/>
      ))}
    </div>
  </div>

  
 </div>
 </>
}
