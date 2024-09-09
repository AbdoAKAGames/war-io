import { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import { SignupPage } from './components/signupPage';
// import { Coon } from './components/coon';
import { Game } from './components/game';
import { Loading } from './components/loading';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {

  const [signedUp, setSignedUp] = useState(false);
  const [signupForm, setSignupForm] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const notes = useRef(null);
  const note = useRef(null);
  const content = useRef(null);
  const profileContent = useRef(null);
  const gearContent = useRef(null);
  const playContent = useRef(null);
  const clansContent = useRef(null);
  const eventsContent = useRef(null);
  const messagesContent = useRef(null);
  const settingsContent = useRef(null);
  const creditsText = useRef(null);

    function showSignup(){
        setSignupForm(true);
    }

    function hideSignupForm(){
        setSignupForm(false);
    }

    function signUp(){
      const nameValue = nameRef.current.value.trim();
      const emailValue = emailRef.current.value.trim();
      const passwordValue = passwordRef.current.value.trim();
      if (nameValue.length > 0
        && emailValue.length > 0
        && passwordValue.length > 0
        && emailValue.includes('@gmail.com')
      ) {
        setSignedUp(true);
        localStorage.setItem("signedUp", true);
        localStorage.setItem("name", nameValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
      }
    }

    function checkSignedUp() {
      if (localStorage.getItem('name') && localStorage.getItem("email") && localStorage.getItem("password"))
        {
          setSignedUp(true)
        } else{
          setSignedUp(false);
        }
      }
      window.addEventListener("load", () => {
        checkSignedUp();
        setIsLoading(false);
        generateID();
      })

      function hideAllItems(showedItem){
        content.current.style.display = 'block';
        profileContent.current.style.display = 'none';
        gearContent.current.style.display = 'none';
        playContent.current.style.display = 'none';
        clansContent.current.style.display = 'none';
        creditsText.current.style.display = 'none';
        eventsContent.current.style.display = 'none';
        messagesContent.current.style.display = 'none';
        // settingsContent.current.style.display = 'none';
        showedItem.current.style.display = 'block';
      }

      function showProfile(){
        hideAllItems(profileContent);
      }
      function showGear(){
        hideAllItems(gearContent);
      }
      function showPlay(){
        hideAllItems(playContent);
        creditsText.current.style.display = 'block';
      }
      function showClans(){
        hideAllItems(clansContent);
      }
      function showEvents(){
        hideAllItems(eventsContent);
      }
      function showMessages(){
        hideAllItems(messagesContent);
      }
      function showSettings(){
        hideAllItems(settingsContent);
      }



      function generateID(){
        const ID = localStorage.getItem("ID")
        if (ID) return
        const newID = crypto.randomUUID();
        localStorage.setItem("ID", newID);
      }

      const melee = [
        {
            name: "Tiger Karambit",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/tiger karambit.png?raw=true",
            rank: "mythic",
            unlockLevel: 0,
            unlocked: true,
        },
        {
            name: "Katana",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Katana.png?raw=true",
            rank: "legend",
            unlockLevel: 0,
            unlocked: true,
        },
    ]
    const pistol = [
        {
            name: "Golden Gun",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/goldengun.png?raw=true",
            rank: "legend",
            unlockLevel: 0,
            unlocked: true,
        },
        {
            name: "Bretta",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Bretta.png?raw=true",
            rank: "rare",
            unlockLevel: 0,
            unlocked: true,
        },
    ];
    const main = [
        {
            name: "AK47",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/AK47.png?raw=true",
            rank: "uncommon",
            unlockLevel: 0,
            unlocked: true,
        },
        {
            name: "M4",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/M4.png?raw=true",
            rank: "rare",
            unlockLevel: 0,
            unlocked: true,
        },
    ];
    const explosives = [
        {
            name: "Frag Grenade",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Frag Grenade.png?raw=true",
            rank: "epic",
            unlockLevel: 0,
            unlocked: true,
        },
        {
            name: "Flash Grenade",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Flash Grenade.png?raw=true",
            rank: "epic",
            unlockLevel: 0,
            unlocked: true,
        },
    ];
    const packs = [
        {
            name: "Ammo Pack",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Ammo Pack.png?raw=true",
            rank: "epic",
            unlockLevel: 0,
            unlocked: true,
        },
        {
            name: "Health Pack",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Health Pack.png?raw=true",
            rank: "epic",
            unlockLevel: 0,
            unlocked: true,
        },
    ];
    const skins = [
      {
          name: "flowers",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/flowers.png?raw=true",
          rank: "common",
          unlockLevel: 0,
          unlocked: true,
      },
      {
          name: "sunny",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/sunny.png?raw=true",
          rank: "uncommon",
          unlockLevel: 0,
          unlocked: true,
      },
  ];
  const bodies = [
      {
          name: "white",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/white.png?raw=true",
          rank: "common",
          unlockLevel: 0,
          unlocked: true,
      },
      {
          name: "grey",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/grey.png?raw=true",
          rank: "uncommon",
          unlockLevel: 0,
          unlocked: true,
      },
  ];
  const hands = [
      {
          name: "none",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/none.png?raw=true",
          rank: "common",
          unlockLevel: 0,
          unlocked: true,
      },
      {
          name: "bunny hands",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/bunnyhands.png?raw=true",
          rank: "uncommon",
          unlockLevel: 0,
          unlocked: true,
      },
  ];
  const emojis = [
    {
        name: "like",
        src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/like emoji.png?raw=true",
        rank: "common",
        unlockLevel: 0,
        unlocked: true,
    },
];
const perks = [
  {
      name: "DAP",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlockLevel: 0,
      unlocked: true,
  },
  {
      name: "DAP2",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlockLevel: 0,
      unlocked: true,
  },
  {
      name: "DAP3",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlockLevel: 0,
      unlocked: true,
  },
  {
      name: "DAP4",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlockLevel: 0,
      unlocked: true,
  },
]


      function saveGear(){
        if (!localStorage.getItem("weapon_1")) localStorage.setItem("weapon_1", JSON.stringify(melee[0]));
        if (!localStorage.getItem("weapon_2")) localStorage.setItem("weapon_2", JSON.stringify(pistol[0]));
        if (!localStorage.getItem("weapon_3")) localStorage.setItem("weapon_3", JSON.stringify(main[0]));
        if (!localStorage.getItem("weapon_4")) localStorage.setItem("weapon_4", JSON.stringify(explosives[0]));
        if (!localStorage.getItem("weapon_5")) localStorage.setItem("weapon_5", JSON.stringify(packs[0]));
        if (!localStorage.getItem("skin_img")) localStorage.setItem("skin_img", JSON.stringify(skins[0]));
        if (!localStorage.getItem("body_img")) localStorage.setItem("body_img", JSON.stringify(bodies[0]));
        if (!localStorage.getItem("hand_img")) localStorage.setItem("hand_img", JSON.stringify(hands[0]));
        if (!localStorage.getItem("emoji_1")) localStorage.setItem("emoji_1", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("emoji_2")) localStorage.setItem("emoji_2", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("emoji_3")) localStorage.setItem("emoji_3", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("emoji_4")) localStorage.setItem("emoji_4", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("perk_1")) localStorage.setItem("perk_1", JSON.stringify(perks[0]));
        if (!localStorage.getItem("perk_2")) localStorage.setItem("perk_2", JSON.stringify(perks[0]));
        if (!localStorage.getItem("perk_3")) localStorage.setItem("perk_3", JSON.stringify(perks[0]));
      }


      function forbiddenUsingTwoPerks() {
        perks[0] = 
            {
                name: "DAP",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
        perks[1] = 
            {
                name: "abc",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
        perks[2] = 
            {
                name: "def",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
        perks[3] = 
            {
                name: "ghi",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
            if (localStorage.perk_1 && localStorage.perk_2 && localStorage.perk_3) {
                perks.forEach((perk, index) => {
                    if (perk.name === JSON.parse(localStorage.getItem("perk_1")).name) {
                        perks.splice(index, 1)
                    }
                })
                perks.forEach((perk, index) => {
                    if (perk.name === JSON.parse(localStorage.getItem("perk_2")).name) {
                        perks.splice(index, 1)
                    }
                })
                perks.forEach((perk, index) => {
                    if (perk.name === JSON.parse(localStorage.getItem("perk_3")).name) {
                        perks.splice(index, 1)
                    }
                })
            }
    }
    

      
  return (
    <>
    {isLoading && <Loading />}
      {!isLoading && <>
        {!signedUp && <SignupPage
        signupForm={signupForm}
        showSignup={showSignup}
        hideSignupForm={hideSignupForm}
        signUp={signUp}
        nameRef={nameRef}
        emailRef={emailRef}
        passwordRef={passwordRef} />
        }
        {signedUp && 
        <>
        <Game
        content={content}
        showProfile={showProfile}
        showGear={showGear}
        showClans={showClans}
        showPlay={showPlay}
        showEvents={showEvents}
        showMessages={showMessages}
        showSettings={showSettings}
        profileContent={profileContent}
        gearContent={gearContent} 
        playContent={playContent} 
        clansContent={clansContent}
        eventsContent={eventsContent}
        messagesContent={messagesContent}
        settingsContent={settingsContent}
        melee={melee}
        pistol={pistol}
        main={main}
        explosives={explosives}
        packs={packs}
        saveGear={saveGear}
        skins={skins}
        bodies={bodies}
        hands={hands}
        emojis={emojis}
        perks={perks}
        forbiddenUsingTwoPerks={forbiddenUsingTwoPerks}
        note={note}
        notes={notes}
        creditsText={creditsText}
        />
        </>
        }
      </>
      }
    </>
  )
}

