import Vue from "vue";
import Router from "vue-router";

import Inicio from "./components/Inicio";

import Usuario from "./components/usuario/Usuario";
import UsuarioLista from "./components/usuario/UsuarioLista";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
import UsuarioEditar from "./components/usuario/UsuarioEditar";

import Imc from "./components/template/Imc";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/imc",
      // component: Inicio,
      name: "imc",
      components: {
        default: Imc,
      },
    },
    {
      path: "/",
      // component: Inicio,
      name: "inicio",
      components: {
        default: Inicio,
      },
    },
    {
      path: "/usuario/",
      component: Usuario,
      props: true,
      children: [
        { path: "", component: UsuarioLista },
        { path: ":id", component: UsuarioDetalhe, props: true },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
    {
      path: "/redirecinar",
      redirect: "/usuario",
    },
    {
      //digitou errado joga pra home
      path: "*",
      redirect: "/",
    },
  ],
});
