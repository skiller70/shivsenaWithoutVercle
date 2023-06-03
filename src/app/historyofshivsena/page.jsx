import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Page() {
  return (
    <div className=" ">
      <Navbar />
      <div className=" my-6">
        <div className="text-2xl text-center my-10"> SHIV SENA HISTORY </div>
        <p className=" md:mx-16 mx-8 text-justify">
          Shiv Sena is a political party in India, particularly prominent in the
          state of Maharashtra. Here is a brief overview of the history of Shiv
          Sena: Shiv Sena was founded on June 19, 1966, by Balasaheb Thackeray,
          a charismatic political leader in Maharashtra. The party emerged as a
          regional, right-wing, and Hindu nationalist organization with the aim
          of advocating and promoting the interests of the Marathi-speaking
          population in Maharashtra. In its early years, Shiv Sena focused on
          issues such as job opportunities for the local population, protection
          of Marathi language and culture, and fighting for the rights of the
          "sons of the soil." The party gained popularity by tapping into the
          sentiments of the Maharashtrian people who felt marginalized in their
          own state. Over time, Shiv Sena started wielding considerable
          influence and expanding its support base in Maharashtra. It built a
          strong grassroots network and gained a reputation for its street
          activism and aggressive style of politics. The party employed tactics
          such as protests, demonstrations, and strikes to make its presence
          felt and push for its demands. Shiv Sena's ideology is often
          characterized by its strong advocacy for Hindutva, a concept that
          emphasizes the cultural and religious identity of Hindus. While
          initially focusing on regional issues, the party later expanded its
          reach and started participating in national politics.
        </p>
        <br />

        <h1 className=" text-2xl text-center mx-4">The Balasahebanchi Shiv Sena</h1>
        <br />
        <p className=" md:mx-16 mx-8 text-justify">
          The Balasahebanchi Shiv Sena (BSS) was a Hindu nationalist political
          party in India that was formed in 2022 and dissolved in 2023. The
          party was led by Eknath Shinde and was a result of a split in the Shiv
          Sena. After the split, the Election Commission of India (ECI) allotted
          the party a new symbol as the main Shiv Sena&#39;s symbol was frozen.
          On 17 February 2023, the ECI granted the BSS the party name and
          symbol, the Shiv Sena and the Bow and Arrow, respectively.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
