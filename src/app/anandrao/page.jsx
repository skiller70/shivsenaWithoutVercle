import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import React from "react";

function Page() {
  return (
    <div>
      <Navbar />
      <Story
        title="Anandrao Vithoba Adsul"
        text="Anandrao Vithoba Adsul (born 1 June 1947) was a member of the 16th Lok Sabha of India. He represented the Amravati constituency of Maharashtra and is a member of the Shiv Sena (SS) political party.[1] He had represented the Amravati constituency in 15th Lok Sabha and Buldhana constituency of Maharashtra in the 14th Lok Sabha, 13th Lok Sabha and 11th Lok Sabha.
He has been honored with Sansad Ratna Award in 2011, 2012 and 2013. "
        img={"/anandraoji.jpg"}
      />

      <div className=" mx-10 mb-10 md:mx-16 md:px-3 lg:-mt-8 ">
        <h1 className=" text-xl font-normal">Career</h1>
        <br />
        <p className="  text-justify">
          He served as a Member of Parliament (Lok Sabha) from Amravati (Lok
          Sabha constituency) till 2019. He served as the Union Minister of
          State for Finance in Prime Minister Atal Bihari Vajpayees cabinet till
          2004. He was the chairperson of two corporations from 1995 to 1999 in
          the Shiv Sena-led government in Maharashtra. Adsul contested the 2019
          Lok Sabha election as a Shiv Sena candidate, and he lost the election
          by 30,000 votes to Navneet Kaur Rana, a former Telugu actress who
          contested the election as an independent candidate.
        </p>
        <br />
        <h1 className=" text-xl font-normal">Positions held</h1>
        <br />
        <ul className=" space-y-2">
          <li>1996: Elected to 11th Lok Sabha (1st term)</li>
          <li>1999: Re-elected to 13th Lok Sabha (2nd term)</li>
          <li>
            Oct. 1999-Jul. 2002: Chief Whip, Shiv Sena Parliamentary Party, Lok
            Sabha.
          </li>
          <li>1999–2002: Member, Committee on Human Resource Development.</li>
          <li>2000–2002: Member, Committee on Transport and Tourism.</li>
          <li>Jul. 2002-Aug. 2002: Leader, Shiv Sena Parliamentary Party</li>
          <li>
            26 Aug. 2002 - May 2004: Union Minister of State, Ministry of
            Finance and Company Affairs.
          </li>
          <li>2009 Re-elected to 15th Lok Sabha (4th term)</li>
          <li>6 Aug. 2009 - Member, Committee on Public Accounts</li>
          <li>31 Aug. 2009 - Member, Committee on Petroleum and Natural Gas</li>
          <li>23 Sep. 2009 - Member, Committee on Government Assurances</li>
          <li>5 May 2010 - Member, Committee on Public Accounts.</li>
          <li>2014: Re-elected to 16th Lok Sabha (5th term)</li>
          <li>
            1 Sep. 2014: Chairperson, Standing Committee on Chemicals and
            Fertilizers.
          </li>
          <li>2018: Appointed Leader of Shiv Sena Party.</li>
        </ul>

        <br />
        <p className="text-xl font-normal">Political Career</p>
        <br />
        <p className=" text-justify">

          Constituency: Adsul has represented the Amravati constituency in the Lok Sabha, the lower house of the Indian
          Parliament. He has been elected multiple times from this constituency.
          Political Positions: Adsul has held various political positions during his career. He has been actively involved in
          party activities and has worked to strengthen the Shiv Sena&#39;s presence in his constituency.
          Parliamentary Contributions: As a Member of Parliament (MP), Adsul has participated in parliamentary debates
          and discussions on various issues. He has raised concerns related to the welfare of his constituents and has worked
          on addressing their needs and demands.
          Committee Memberships: Adsul has been a member of different parliamentary committees, contributing to the
          legislative process and policy-making. The specific committees he has served on may vary over time.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
