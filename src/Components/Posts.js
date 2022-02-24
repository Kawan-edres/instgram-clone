import React from 'react'
import Post from './Post'
import images from "./Images";


const Posts = () => {
  return (
    <div>

        <Post avatar={images[0]} title="Kawan Idrees" img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274523625_2095227117325000_8966097204756000896_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG3pF_87BNzk_-dQ0kDC_NJ9YeP0QXyoeb1h4_RBfKh5tCkzCSev_e7ZMpR_dGWUrl4GB7JaH8qtRInbsuxDKIn&_nc_ohc=lqIO0sWu4zUAX-fIv4h&tn=ZXZcWFGiRQblqxr5&_nc_ht=scontent.febl5-1.fna&oh=00_AT9qfY2z7MN7IMQhaha_JYIMYEijeiE6SbSQbkAM-jlEKw&oe=621C5073"/>
        <Post avatar={images[4]} title="Yusf Jasm" img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274674563_4656680457774333_2577902269419803191_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHvZPES1Rp_Rm8cY2aenFcHjtaoIaFXsgWO1qghoVeyBa14wLSnVQDbc0Ds2eWLn3YEmfrGeiX2ketAibWQzmC_&_nc_ohc=VEi-ziU0rE4AX_iogMP&_nc_ht=scontent.febl5-1.fna&oh=00_AT9mSFooaRABRLTiDJ01MZLeExgfh7RD7qMvH8_Ih-o3lA&oe=621B4C5C"/>
        <Post avatar={images[5]} title="Naly Muslih" img="https://scontent.febl5-2.fna.fbcdn.net/v/t39.30808-6/274694306_491449549196204_5554394120504269662_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGwLi2LaqzBxZ6myC9rWm58dsGMTTszxqB2wYxNOzPGoK9HqVFglTMSstf3584lI2PbmM9Gzc0s5COpZxtrdF7Z&_nc_ohc=SonpE0RXBc4AX8HOyVT&_nc_oc=AQl0GcWQ1JAOkY2SXhEQlBCqp_JtRa2A-QmQlqi4e6fxXJY89PXgkDKeU9GQL1w_0zU&tn=ZXZcWFGiRQblqxr5&_nc_ht=scontent.febl5-2.fna&oh=00_AT91mBolYt0DHFzUpfjDP6qabWVYX5kayD0rVyYd2wTsxw&oe=621C7F8A"/>
        <Post avatar={images[3]} title="Aram Azadin"  img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274586364_134741429048980_606675053152927540_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeG2dy-UPG49hW1STKiWrpfjY2O16ZsPLEhjY7Xpmw8sSDC7CKSD7-V2EKlJGwSPL-2JiKm7pDXeE193tCaFJMG1&_nc_ohc=vtPgrTef_JMAX-WJEU-&_nc_ht=scontent.febl5-1.fna&oh=00_AT8Q0WZ67txYfBGB6rTMHAAYrZjtopssx-Xke6G4a9TH8g&oe=621C6A5C" />
        <Post avatar={images[0]} title="Kawan Idrees" img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274523625_2095227117325000_8966097204756000896_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG3pF_87BNzk_-dQ0kDC_NJ9YeP0QXyoeb1h4_RBfKh5tCkzCSev_e7ZMpR_dGWUrl4GB7JaH8qtRInbsuxDKIn&_nc_ohc=lqIO0sWu4zUAX-fIv4h&tn=ZXZcWFGiRQblqxr5&_nc_ht=scontent.febl5-1.fna&oh=00_AT9qfY2z7MN7IMQhaha_JYIMYEijeiE6SbSQbkAM-jlEKw&oe=621C5073"/>
        <Post avatar={images[4]} title="Yusf Jasm" img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274674563_4656680457774333_2577902269419803191_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHvZPES1Rp_Rm8cY2aenFcHjtaoIaFXsgWO1qghoVeyBa14wLSnVQDbc0Ds2eWLn3YEmfrGeiX2ketAibWQzmC_&_nc_ohc=VEi-ziU0rE4AX_iogMP&_nc_ht=scontent.febl5-1.fna&oh=00_AT9mSFooaRABRLTiDJ01MZLeExgfh7RD7qMvH8_Ih-o3lA&oe=621B4C5C"/>
        <Post avatar={images[5]} title="Naly Muslih" img="https://scontent.febl5-2.fna.fbcdn.net/v/t39.30808-6/274694306_491449549196204_5554394120504269662_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGwLi2LaqzBxZ6myC9rWm58dsGMTTszxqB2wYxNOzPGoK9HqVFglTMSstf3584lI2PbmM9Gzc0s5COpZxtrdF7Z&_nc_ohc=SonpE0RXBc4AX8HOyVT&_nc_oc=AQl0GcWQ1JAOkY2SXhEQlBCqp_JtRa2A-QmQlqi4e6fxXJY89PXgkDKeU9GQL1w_0zU&tn=ZXZcWFGiRQblqxr5&_nc_ht=scontent.febl5-2.fna&oh=00_AT91mBolYt0DHFzUpfjDP6qabWVYX5kayD0rVyYd2wTsxw&oe=621C7F8A"/>
        <Post avatar={images[3]} title="Aram Azadin"  img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274586364_134741429048980_606675053152927540_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeG2dy-UPG49hW1STKiWrpfjY2O16ZsPLEhjY7Xpmw8sSDC7CKSD7-V2EKlJGwSPL-2JiKm7pDXeE193tCaFJMG1&_nc_ohc=vtPgrTef_JMAX-WJEU-&_nc_ht=scontent.febl5-1.fna&oh=00_AT8Q0WZ67txYfBGB6rTMHAAYrZjtopssx-Xke6G4a9TH8g&oe=621C6A5C" />
        <Post avatar={images[0]} title="Kawan Idrees" img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274523625_2095227117325000_8966097204756000896_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG3pF_87BNzk_-dQ0kDC_NJ9YeP0QXyoeb1h4_RBfKh5tCkzCSev_e7ZMpR_dGWUrl4GB7JaH8qtRInbsuxDKIn&_nc_ohc=lqIO0sWu4zUAX-fIv4h&tn=ZXZcWFGiRQblqxr5&_nc_ht=scontent.febl5-1.fna&oh=00_AT9qfY2z7MN7IMQhaha_JYIMYEijeiE6SbSQbkAM-jlEKw&oe=621C5073"/>
        <Post avatar={images[4]} title="Yusf Jasm" img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274674563_4656680457774333_2577902269419803191_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHvZPES1Rp_Rm8cY2aenFcHjtaoIaFXsgWO1qghoVeyBa14wLSnVQDbc0Ds2eWLn3YEmfrGeiX2ketAibWQzmC_&_nc_ohc=VEi-ziU0rE4AX_iogMP&_nc_ht=scontent.febl5-1.fna&oh=00_AT9mSFooaRABRLTiDJ01MZLeExgfh7RD7qMvH8_Ih-o3lA&oe=621B4C5C"/>
        <Post avatar={images[5]} title="Naly Muslih" img="https://scontent.febl5-2.fna.fbcdn.net/v/t39.30808-6/274694306_491449549196204_5554394120504269662_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGwLi2LaqzBxZ6myC9rWm58dsGMTTszxqB2wYxNOzPGoK9HqVFglTMSstf3584lI2PbmM9Gzc0s5COpZxtrdF7Z&_nc_ohc=SonpE0RXBc4AX8HOyVT&_nc_oc=AQl0GcWQ1JAOkY2SXhEQlBCqp_JtRa2A-QmQlqi4e6fxXJY89PXgkDKeU9GQL1w_0zU&tn=ZXZcWFGiRQblqxr5&_nc_ht=scontent.febl5-2.fna&oh=00_AT91mBolYt0DHFzUpfjDP6qabWVYX5kayD0rVyYd2wTsxw&oe=621C7F8A"/>
        <Post avatar={images[3]} title="Aram Azadin"  img="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-6/274586364_134741429048980_606675053152927540_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeG2dy-UPG49hW1STKiWrpfjY2O16ZsPLEhjY7Xpmw8sSDC7CKSD7-V2EKlJGwSPL-2JiKm7pDXeE193tCaFJMG1&_nc_ohc=vtPgrTef_JMAX-WJEU-&_nc_ht=scontent.febl5-1.fna&oh=00_AT8Q0WZ67txYfBGB6rTMHAAYrZjtopssx-Xke6G4a9TH8g&oe=621C6A5C" />




    </div>
  )
}

export default Posts