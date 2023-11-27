import { Sidebar } from "@/components/molecules/SidebarBtn";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  return (
    <Main>
      <Outlet />
      <Sidebar />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;
`;
