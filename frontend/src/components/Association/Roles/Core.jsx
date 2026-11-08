import Profile from "../Profile"

function Core() {
  return (
    <div>
      <div className="section divide-3">
        <Profile
          img="Profile/DrMustafaBasthikodi.jpg"
          role="President"
          name="Dr. Mustafa Basthikodi"
          extras="HOD of Computer Science"
          socials="https://www.linkedin.com/in/dr-mustafa-basthikodi-3b644442/"
        />
        <Profile
          img="Profile/prapulla.jpg"
          role="Staff Co-ordinator"
          name="Ms. Prapulla G"
          socials="https://www.linkedin.com/in/prapulla-g-0ba21bb1/"
        />
        <Profile
          img="Profile/Srishti Rai M.jpg"
          role="Vice President"
          name="Srishti Rai M"
          socials="https://www.linkedin.com/in/srishti-rai-m-b6092b272/"
        />
        <Profile
          img="Profile/Ashika.jpg"
          role="Secretary"
          name="Ashika"
          socials="https://www.linkedin.com/in/askashika"
        />
        <Profile
          img="Profile/PRASHWIN PJ.jpeg"
          role="Joint Secretary"
          name="Prashwin PJ"
          socials="http://linkedin.com/in/prashwin-prabhakar"
        />
        <Profile
          img="Profile/skanda.jpg"
          role="Treasurer"
          name="Skanda Ganesh P V"
          socials="https://www.linkedin.com/in/skanda-ganesh/"
        />
        <Profile
          img="Profile/Abisha Shetty.jpg"
          role="Joint Treasurer"
          name="Abisha Shetty"
          socials="https://www.linkedin.com/in/abisha-shetty-a9351b285"
        />
      </div>
    </div>
  )
}

export default Core
