import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import mordorImage from "../../img/mordor.jpg";
import rivendelImage from "../../img/rivendel.jpg";
import minaslImage from "../../img/minas.jpg";
import hobbitonlImage from "../../img/hobbiton.jpg";
import Footer from "./Footer";
import jumboBack from "../../img/jumbotron.jpg";

//create your first component
const Home = () => {
    return (
        <div>
            <Navbar
                link="https://getbootstrap.com/"
                contact="https://github.com/greyzeids"
            />
            <div className="container-fluid p-5">
                <div className="row mb-4">
                    <div className="col-12">
                        <Jumbotron
                            title="Bienvenido a la Tierra Media"
                            description="Entra en un mundo de magia, aventura y destino.
                        Bienvenido a la Tierra Media, donde las montañas
                        susurran leyendas antiguas y los ríos llevan historias
                        olvidadas. Embárcate en un viaje épico, donde el bien y
                        el mal se entrelazan en una danza eterna, y los
                        corazones valientes forjan su destino en el fragor de la
                        batalla."
                            button="Go to Middle Earth"
                            link="https://esdla.fandom.com/wiki/Tierra_Media"
                            imgSrc={jumboBack}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <Card
                            imgSrc={mordorImage}
                            title="Mordor"
                            description="Mordor, la tierra devastada y yermo del Señor Oscuro, donde la sombra impregna cada rincón y el fuego arde eternamente, marcando la desolación."
                            button="Go to Mordor"
                            link="https://esdla.fandom.com/wiki/Mordor"
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <Card
                            imgSrc={rivendelImage}
                            title="Rivendel"
                            description="Rivendel, el refugio élfico escondido entre las montañas, donde la belleza de la naturaleza se mezcla con la sabiduría ancestral de los elfos."
                            button="Go to Rivendel"
                            link="https://esdla.fandom.com/wiki/Rivendel"
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <Card
                            imgSrc={minaslImage}
                            title="Minas Tirith"
                            description="Minas Tirith, la Ciudad Blanca de Gondor, majestuosa y vigilante sobre las llanuras, donde los pilares de la esperanza se alzan contra la oscuridad."
                            button="Go to Minas Tirith"
                            link="https://esdla.fandom.com/wiki/Minas_Tirith"
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <Card
                            imgSrc={hobbitonlImage}
                            title="Hobbiton"
                            description="Hobbiton, el apacible pueblo de los hobbits, donde la vida tranquila y la buena comida son tan importantes como la amistad y la aventura."
                            button="Go to Hobbiton"
                            link="https://esdla.fandom.com/wiki/Hobbiton"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center text-white">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
