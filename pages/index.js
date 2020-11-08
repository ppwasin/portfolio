import Head from "next/head";

export default function Home() {
  // return (
  //   <div class="container mx-auto flex px-5 items-center justify-center flex-col">
  //     <div class="text-center lg:w-2/3 w-full">
  //       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
  //         Microdosing synth tattooed vexillologist
  //       </h1>
  //       <p class="mb-8 leading-relaxed">
  //         Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
  //         tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
  //         ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
  //         meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth
  //         af fingerstache pitchfork.
  //       </p>
  //       <div class="flex justify-center">
  //         <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
  //           Button
  //         </button>
  //         <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
  //           Button
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <div class="relative flex items-center bg-gray-200 h-screen w-screen bg-gray-700">
        <div class="flex-1 content-center items-center">
          <span class="text-3xl font-bold text-center text-white">
            <p>Hi, I'm Wasin</p>
            <p>Mobile Developer</p>
          </span>
          <div class="py-2" />
          <div class="flex justify-center">
            <button
              class="
                transition 
                duration-500 
                ease-in-out 
                py-2 px-4
                border 
                border-blue-500
                rounded-full
                text-white                
                bg-transparent
                transform 
                hover:text-white 
                hover:bg-blue-600 
                hover:-translate-x-1 
                hover:scale-110 
                "
            >
              YES, I'M AVALIBLE FOR HIRE
            </button>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 w-screen">
          <div>Learn more about what I do</div>
        </div>
      </div>

      <div class="bg-gray-400 h-screen">
        <p class="text-5xl ...">The quick brown fox ...</p>
      </div>
    </>
  );
}

const TailWindDemo = () => {
  return (
    <div className="md:flex bg-white rounded-lg p-24 justify-center">
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="<https://pbs.twimg.com/profile_images/1102120097081184257/61tO47TQ_400x400.jpg>"
      />
      <div className="text-center md:text-left">
        <h2 className="text-lg">Wasin Passornpakorn</h2>
        <div className="text-purple-500">Mobile Developer</div>
        <div className="text-gray-600">Twitter: @ppwasin</div>
        <div className="text-gray-600">www.ex.com</div>
      </div>
    </div>
  );
};
