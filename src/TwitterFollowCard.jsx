import { useState } from "react";

export default TwitterFollowCard;

function TwitterFollowCard({
  children,
  userName = "unknown",
  initialIsFollowing,
}) {
    //? como manejar el estado de un componente en react.
    //? el `following` seria el valor inicial y el `setIsFollowing` es la función que modifica el valor principal.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
    
  //? Función para cambiar el estado de true a false.
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>

      </aside>
    </article>
  );
}
