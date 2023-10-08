//? esto es importar un estilo para css y usar el estilo solamente en los componentes/widget
//? designados a cada estilo único.
import "./Gon.css";
import TwitterFollowCard from "./TwitterFollowCard.jsx";

//? asi es como se exporta un componente aparte
export default Gon;

const users = [
    {
        name: "matiasSanchez",
        userName: "matias",
        isFollowing: true,
    },{
        name: "rodrigo Sanchez",
        userName: "rodrigo",
        isFollowing: false,
    },{
        name: "diego sanchez",
        userName: "diego",
        isFollowing: false,
    },{
        name: "alba Sanchez",
        userName: "alba",
        isFollowing: false,
    },{
        name: "jonh smith",
        userName: "jonh",
        isFollowing: false,
    },{
        name: "jonhs mith jr",
        userName: "jonhjr",
        isFollowing: true,
    },
]
function Gon() {
  //? como poner funciones dentro de un componente en este caso si username viene se le pone un arroba
  //? antes del nombre.
  const format = (userName) => `@${userName}`;

  //? como pasar un elemento dentro una propiedad para que sea utilizada en el componente es como pasar un
  //? widget a otro.
  const formattedUserName = <span>@matiasSanchez</span>;

  return (
    <section className="Gon">
        
    {/*
    //? el isFollowing si lo pones sin definir su valor por defecto se pone en
    //? true o se lo pasas si quieres que sea falso se lo tenes que poner
    //? entre llaves.
    */}
      <TwitterFollowCard
        formatUserName={format}
        userName="matias"
        initialIsFollowing
      >
        SanchezMatias
      </TwitterFollowCard>
      {/*
    //? como mapear una lista y devolver la tarjeta correspondiente.
    */}
      {/*
    //? la key sirve para identificar los elementos.y que no se rompa la UI si o si es necesaria.
    */}
     {
        users.map(({userName,name,isFollowing}) =>  (
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                >
                {name}
                </TwitterFollowCard>
            )
        )
     }
    </section>
  );
}
