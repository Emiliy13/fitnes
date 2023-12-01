import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Ishrana.css'
const Ishrana = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Stranica za Ishranu</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Raznolikost</h2>
          <p>Jedite raznovrsnu hranu kako biste osigurali unos svih potrebnih nutrijenata. Uključite različite vrste voća, povrća, integralnih žitarica, proteina, mlečnih proizvoda i zdravih masti.</p>
        </div>
        <div className="col-md-6">
          <h2>Uravnoteženost</h2>
          <p>Uravnotežena ishrana podrazumeva unos potrebne količine proteina, ugljenih hidrata, masti, vitamina i minerala. Pokušajte da vaš obrok sadrži sve ove komponente kako biste održali balans u ishrani.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Pravilan unos tečnosti</h2>
          <p>Voda je ključna za hidrataciju organizma. Pijte dovoljno vode tokom dana. Preporučuje se unositi najmanje 8 čaša vode dnevno, ali unos tečnosti varira od osobe do osobe.</p>
        </div>
        <div className="col-md-6">
          <h2>Umerenost</h2>
          <p>Nemojte preterivati ni sa čim. Ishrana treba da bude umerena, ne preterano restriktivna, ali ni preterano nekontrolisana. Neka vaša ishrana bude uravnotežena i prilagođena vašim potrebama.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Planiranje obroka</h2>
          <p>Planiranje obroka pomaže u održavanju zdrave ishrane. Pokušajte da planirate obroke unapred kako biste osigurali da unosite sve potrebne hranljive materije.</p>
        </div>
        <div className="col-md-6">
          <h2>Saveti</h2>
          <p>Za specifične savete o ishrani, obratite se nutricionisti ili stručnjaku za ishranu koji će vam pružiti personalizovan plan ishrane prilagođen vašim ciljevima i potrebama.</p>
        </div>
      </div>
    </div>
  );
};

export default Ishrana;
