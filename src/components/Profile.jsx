// Coding challange
//Create a react application that demonstrate  the use ofprops by building a simple profile card system.Each profile card should display a user'
// s name ,age,and a personalized greeting message.Additionally ,use props.
// children to allow for flexible content inside each profile card.


//***********create a Main component :Profile */


//***********create a Main component :ProfileCard component */
function Profile(){
    return(
    <div>
        <h1>Profile card challange</h1>
        <ProfileCard
        name="Alice"
        age={40}
        greeting={
            <div>
                <strong>Hi Alice,have a wonderful day</strong>
            </div>
        }
        
        >
        <p>Hobbies:Reading,Hiking</p>
        <button>Conatct</button>
        </ProfileCard>
         <ProfileCard
        name="John"
        age={25}
        greeting={
          <div>
            <strong>Welcome John!</strong>
          </div>
        }
      >
        <p>Hobbies: Coding, Cricket</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
    )
}

export default Profile;

//***********create a ProfileCard component */
function ProfileCard(props){
    return(
        <>
        <h2>
            name:{props.name}
        </h2>
        <p>age:{props.age}</p>

        <div>{props.greeting}</div>
        <div>{props.children}</div>
        </>
    )
}