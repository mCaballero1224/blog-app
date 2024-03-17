import React from 'react';

import Navbar from '../components/Navbar';

import UserIcon from '../assets/icons/user-icon.png';

function AboutPage() {

    const memberBios = [
        { name: "Michael",
          id: "001",
          img: UserIcon,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        { name: "Sayid",
          id: "002",
          img: UserIcon,
          bio: "Hey my name is Sayid Ali. I'm 23 and from Eden prairie MN. I have a degree in biology that i got in 2022 but decided to go back and get a one in Computer science from the Postbacc program. Outside of school and work I like hiking, lifting and playing basketball."
        },
        { name: "Sahil",
          id: "003",
          img: UserIcon,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        { name: "Gabriel",
          id: "004",
          img: UserIcon,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ];


    return(
        <main className="about_page">
            <Navbar />
            <h1>The Future Gadget Team</h1>
            <section className="member_bios">
            {memberBios.map((member, index) => (
                <div className="member_bio">
                    <img className="member_img" src={member.img} />
                    <p className="member_name">{member.name}</p>
                    <p className="member_id">Lab Mem: {member.id}</p>
                    <p className="bio">{member.bio}</p>
                </div>
            ))}
            </section>
        </main>
    );
}

export default AboutPage;
