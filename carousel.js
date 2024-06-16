const ListOfImgs = [
    "https://resources.formula-e.pulselive.com/photo-resources/2024/04/25/73b3fedf-6c60-4dd0-9fd6-a995ff8e1af6/skIeg4Dz.jpg?width=1440&height=810",
    "https://doubleapex.co.za/wp-content/uploads/2024/04/Formula-E-Gen3-Evo-rear.jpg",
    "https://cdn-3.motorsport.com/images/amp/63vnxw8Y/s1000/formula-e-gen-3-evo.jpg"
  ];
  
  function goBack() {
    const img = document.getElementById("carousel-img")
    if (ListOfImgs.indexOf(img.src) != 0) {
      img.src = ListOfImgs[ListOfImgs.indexOf(img.src) - 1];
    } else {
      img.src = ListOfImgs[ListOfImgs.length - 1];
    }
  }
  function goForward() {
    const img = document.getElementById("carousel-img")
      if (ListOfImgs.indexOf(img.src) != ListOfImgs.length - 1) {
        img.src = ListOfImgs[ListOfImgs.indexOf(img.src) + 1];
      } else {
        img.src = ListOfImgs[0];
      }
    }
    