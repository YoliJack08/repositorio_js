      class producto{
        constructor(nombre, sku, unidades, precio){
          this.nombre = nombre.toUpperCase();
          this.sku = parseFloat(sku);
          this.unidades = parseFloat(unidades);
          this.precio =parseFloat(precio);
        }
      }
    
      const Array1=[];
      Array1.push(new producto("suplemento vegano", 74856, 15, 200));
      Array1.push(new producto("soya", 12345, 70, 50));
      Array1.push(new producto("Ajonjoli", 78946, 10, 25));
      Array1.push(new producto("Miel", 01554 , 3, 50));
      Array1.push(new producto("JARABE PARA GRIPA", 88875, 2, 75));
      Array1.push(new producto("Leche de almendra", 89971, 6, 150));
      console.log("Arreglo base con objetos");
      console.log(Array1);

      const buscar_producto= Array1.find(elemento => elemento.nombre === "SOYA");
      const filtrar_unidades= Array1.filter(elemento => elemento.unidades <5 );

      console.log("Buscar objeto con producto SOYA");
      console.log(buscar_producto);
      console.log("Filtrar objeto con menos de 5 unidades");
      console.log(filtrar_unidades);
      const Array2=Array1.slice();
      Array2.sort((x,y) =>{
        const nombreX = x.nombre;
        const nombreY = y.nombre;
        if (nombreX < nombreY) {
          return -1;
        }else if (nombreX < nombreY){
          return 1;
        }else{
          return 0;
        }
      })

      console.log("Ordenar objetos por alfabeticamente por nombre");
      console.log(Array2);