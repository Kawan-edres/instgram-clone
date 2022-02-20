import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import RightBottomSide from "./RightBottomSide";


const RightSide = () => {
  return (
    <div className="h-auto flex  flex-col">
      {/* top */}

      <div className="w-full h-[5rem] flex items-center justify-between  ">
        <Link to="/myprofile">
          <div className="flex">
            <Avatar
              sx={{ width: 60, height: 60 }}
              src="https://scontent.febl5-2.fna.fbcdn.net/v/t39.30808-6/240423226_1545645172494326_4049829544821431047_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEmiRImZKLfRC1m3TvbKInTTNKEF8IPZ7xM0oQXwg9nvMnwvMsXT7PbUEbGJLg_c7Fwa1QAi6QB0Zk-0vsAUzb-&_nc_ohc=f6UoVouYfcAAX91tcmq&_nc_ht=scontent.febl5-2.fna&oh=00_AT8aZR1YUgE8uACfAVAZ1xeDz1PH5HX5FzFBCM5jECQqSg&oe=62102322"
            />
            <div className="flex flex-col ml-3 justify-center">
              <h1 className="text-xl">kawan_idrees</h1>
              <p className="text-mGray ">Kawan Idrees</p>
            </div>
          </div>
        </Link>

        <button className="text-buttonBlue font-semibold text-sm">Swich</button>
      </div>

      {/* bottom */}

      <div className="mt-6 ">
        <div className=" mb-1 flex justify-between items-center w-72">
          <h1 className="text-mGray">Suggestions For You</h1>
          <button className="text-black">See All</button>
        </div>

        <RightBottomSide
          title={"alan AbdSalam"}
          img={
            "https://scontent.febl5-2.fna.fbcdn.net/v/t1.6435-9/78087412_2241153056177983_4422522309953191936_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFTKELBwfGHS7xikzYe5tNPHFD6Yz6Pg2QcUPpjPo-DZG5BWgg4NYNUSlMtUbWltNquyYl7RxNGVW2MPgsymbqm&_nc_ohc=DrI59oJqrhUAX_Ms1Xb&_nc_oc=AQlvj84IX99XMl-L3asbm5lHsmWK3OuomWsfxm2pmFzyrGpie9GwsA-TPAX0TkfXtvk&_nc_ht=scontent.febl5-2.fna&oh=00_AT8-PGpNsCc7dUu3EyDnIDy1cO8ZBS48h-0F-cBnLc7-Sw&oe=623209CD"
          }
        />
        <RightBottomSide
          title={"Danyal Dler"}
          img={
            "https://scontent.febl5-2.fna.fbcdn.net/v/t1.6435-1/190200299_1103616803465849_6170345091439312296_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHgUxtnNV2NsPsvf7jJVQCg7Xg23P_u3BLteDbc_-7cEjLewovB-e60siMsuX7WjiMOa2kYN6gRiNNwAbTtBO8U&_nc_ohc=3Oc7xUjvvHcAX8UCjZ7&_nc_ht=scontent.febl5-2.fna&oh=00_AT8x5pC_4kAYs4LGfUKz8Yw4aP2TsLgwrkvGTyb1mXRFLg&oe=6233E960"
          }
        />
        <RightBottomSide
          title={"Saed Idrees"}
          img={
            "https://scontent.febl5-2.fna.fbcdn.net/v/t1.6435-1/p320x320/202327789_100232382314886_8212177037839725628_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGGejcTcerN3tZWSmOChyJ2cVppkbM4wDVxWmmRszjANbOdLF6YI79Aq3lcHaqJKyKrH-1SfNZdHJrAuDQaG9KK&_nc_ohc=vPJUEiPSG6cAX9oyB3y&_nc_ht=scontent.febl5-2.fna&oh=00_AT_GoG1iun5xl4Yby7fPDpVey6I7QCAO311le1oLgHz4fA&oe=62344F91"
          }
        />

<RightBottomSide
          title={"Ahmed Koga"}
          img={
            "https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/239339626_872668826978723_4153392156517714549_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHF2IBrHSMxufkPDuGRFBRYrNkyxLvFQ6Gs2TLEu8VDofD4w5WZg_rzkJ7ZWhk8J0yOkkMZeoBIFuFJkFgGTG_m&_nc_ohc=-m06t3xVaSkAX992LO0&_nc_ht=scontent.febl5-1.fna&oh=00_AT85HHpbHypcJEFisH8iXoL0En3CcAI7YtGwlzh14Zt-Tg&oe=6211DF24"
          }
        />
        <RightBottomSide
          title={"Diari Brzo"}
          img={
              "https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/244025217_104754895313488_3723176783969441237_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEe_4i5qyBus3mbQs8H58NnZHGa4IPgD0hkcZrgg-APSFePAsBakIOmp5b7CgMsEmY8VbZjbOAxNqIpXWbvmOAh&_nc_ohc=k-yKLd7J5y4AX8OKAm6&_nc_ht=scontent.febl5-1.fna&oh=00_AT9DFSCKN6PJ9wQl92m2fQGAOfXxXXkeYQSY_XEiAjk1KQ&oe=6212F54E"
           }
        />

        
       
      </div>
    </div>
  );
};

export default RightSide;
