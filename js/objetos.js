class Usuario {
    constructor(nombre, apellido, correo, celular, comentario) {
      this.nombre = nombre.toUpperCase();
      this.apellido = apellido.toUpperCase();
      this.correo = correo;
      this.celular = celular;
      this.comentario = comentario;
    }

    VerCorreo(){
        alert(this.nombre + ", gracias por enviarnos tus valiosos comentarios. Ayudanos a validar si " + this.correo + " está escrito correctamente" )
    }

  }

  class Producto {
    constructor(nom_Producto, subPrecio) {
      this.nom_Producto = nom_Producto;
      this.subPrecio = parseFloat(subPrecio);
    }

    precio(){
       this.subPrecio= this.subPrecio * 1.16;
       alert ("Gracias! estás por comprar " + this.nom_Producto )
       alert("Por este producto pagaras $" + this.subPrecio )
    }
  }

  let Usuario1 = new Usuario ("carlos", "zepeda", "carlos@gmail.com", 55, "bye");
  Usuario1.VerCorreo();
  
  let Producto1 = new Producto ("Ajolotiux", 200);
  Producto1.precio();
