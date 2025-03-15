
const AboutSection= () => {
  return (
    <div 
    className="
    bg-[#0F6585] text-white p-6 rounded-2xl shadow-lg max-w-3xl 
    mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">

    <div className="text-center md:text-left md:w-1/3">
      <h2 
      className="text-xl font-semibold">
        What is
         <span 
         className="text-gray-300">
            SKC</span> 
            System?
            </h2>
    </div>

    <div className="md:w-2/3">
      <p className="text-sm leading-relaxed">
        The SKC Voter Tracking System helps barangays monitor voter status and promote
         transparency in elections. The SKC Community Engagement System keeps the youth 
         informed about community events, announcements, and initiatives.
      </p>
    </div>

  </div>
  )
}

export default AboutSection