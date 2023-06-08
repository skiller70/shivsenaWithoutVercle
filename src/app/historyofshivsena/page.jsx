import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className=" ">
      <Navbar />
      <Image src={"/oldBalasaheb.jpeg"} width={1920} height={800} alt="oldbala" />

    

      <div className=" my-6">
        <div className="text-2xl text-center my-16"> SHIV SENA HISTORY </div>
        <p className=" md:mx-16 mx-8 text-justify">
          Shiv Sena is a political party in India, primarily based in the state of Maharashtra. It was founded on June 19, 1966, by Balasaheb Thackeray, a charismatic leader who served as the partys chief until his death in 2012. The partys ideology is centered around Marathi regionalism and Hindu nationalism.
          The early years of Shiv Sena were marked by its emphasis on promoting the interests of the Marathi-speaking population of Maharashtra. It aimed to protect the rights of locals and address the grievances of the Marathi community in areas such as employment, education, and housing. Shiv Senas political ideology also included a strong pro-Hindutva stance, advocating for the rights and welfare of Hindus.
          In the 1960s and 1970s, Shiv Sena gained popularity and support through its aggressive and often controversial methods. It organized protests, strikes, and demonstrations to champion the cause of the Marathi people and adopted a confrontational approach towards those it perceived as threats to the interests of Maharashtra.
          Shiv Sena made its mark in Mumbais politics by targeting South Indian migrants, whom it accused of taking away jobs from local residents. The partys members frequently engaged in violent confrontations with migrant workers, leading to significant social tensions in the city during that time.
          Over the years, Shiv Sena expanded its political base and emerged as a major force in Maharashtras politics. In 1995, it formed an alliance with the Bharatiya Janata Party (BJP) and played a crucial role in the coalition government that came to power in Maharashtra. This alliance continued for many years, with Shiv Sena and BJP jointly contesting and winning several state and national elections.
          However, in recent years, the political dynamics changed. In 2019, Shiv Sena and BJP contested the Maharashtra state elections as alliance partners but faced differences over power-sharing. Shiv Sena insisted on rotating the chief ministers position, which was not agreeable to the BJP. Consequently, Shiv Sena formed an unlikely alliance with the Indian National Congress and the Nationalist Congress Party to form the government in Maharashtra, breaking away from the long-standing alliance with the BJP.

          This move led to a significant shift in Shiv Senas political positioning. The party, under the leadership of Balasaheb Thackerays son Uddhav Thackeray, became the chief minister of Maharashtra. Shiv Sena, while still holding on to its Marathi regionalist roots, adopted a more centrist and pragmatic approach in its governance.


        </p>
        <br />

        <h1 className=" text-2xl text-center mx-4">The Balasahebanchi Shiv Sena</h1>
        <br />
        <p className=" md:mx-16 mx-8 text-justify">
          The Balasahebanchi Shiv Sena (BSS) was a Hindu nationalist political party in India that was formed in 2022 and dissolved in 2023. The party was led by Eknath Shinde and was a result of a split in the Shiv Sena. After the split, the Election Commission of India (ECI) allotted the party a new symbol as the main Shiv Senas symbol was frozen. On 17 February 2023, the ECI granted the BSS the party name and symbol, the Shiv Sena and the Bow and Arrow, respectively.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
