


export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}pills.jpg)` }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">The New Miracle Drug,</h1>
      <p className="text-lg text-gray-600 mb-8">Trusted to revolutionize your life.</p>
    </div>
    <div className="flex w-full min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Genovex</h1>
        <p className="text-lg text-black mb-8">Created by our team of experts, aims to create a new standard for genetic therapy. Genovex is a well-researched all-purpose treatment for any genetic problems you may have.</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Genovex:</h1>
        <ul className="list-disc list-inside text-black">
          <li>Less Acne</li>
          <li>Improved Skin Health</li>
          <li>Less Hair Loss</li>
          <li>Improvement of athleticism</li>
          <li>Reversal of chromosomal disorders</li>
          <li>Reversal of single-cell mutation disorders</li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <img src={`${import.meta.env.BASE_URL}family.jpg`} alt="Family" className="rounded-lg max-h-full max-w-full object-cover" />
      </div>
    </div>
    <div className="flex w-full max-h-[80] overflow-hidden items-center justify-center bg-orange-500 text-white p-2">
      <ul className="flex space-x-4 list-disc list-inside text-sm">
        <li>Fast relief</li>
        <li>Safe use</li>
        <li>Certified by General Electrics Co.</li>
        <li>Certified by Big Oil</li>
        <li>In partnership with Piranha Medical Research</li>
      </ul>
    </div>
    <div className="flex flex-col w-full min-h-screen bg-gray-100 p-8 items-center justify-start">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our professionals</h1>
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={`${import.meta.env.BASE_URL}smiling_biologist.jpg`} alt="Smiling Biologist" className="rounded-lg w-full h-auto object-cover" />
        <p className="text-lg text-gray-600">"I have been working on Genovex for many years, and am proud to see it finally go to use. We have meticulously developed and tested this treatment to ensure each customer recieves great results." - Dr. Jane Smith, Lead Researcher</p>
      </div>
    </div>
    </>
  );
}