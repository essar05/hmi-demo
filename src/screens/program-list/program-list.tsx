import React from "react";
import "./program-list.scss";
import { MainLayout } from "../../layouts/main/main";
import { Program } from "../../components/program/program";
import { Icons } from "../../components/icon/icon";
import { Carousel } from "../../components/carousel/carousel";

export interface IProgramListProps {}

/**
 * Program list screen
 */
export const ProgramList: React.FunctionComponent<IProgramListProps> = () => {
  return (
    <MainLayout>
      <Carousel>
        <Program icon={Icons.AIRPLANE} title="Dummy 1" subtitle="Second Line" />
        <Program icon={Icons.PEOPLE} title="Dummy 2" />
        <Program icon={Icons.FLAG} title="Dummy 3" />
        <Program icon={Icons.UMBRELLA} title="Dummy 4" subtitle="Second Line" />
        <Program icon={Icons.PEOPLE} title="Dummy 5" subtitle="Second Line" />
        <Program icon={Icons.UMBRELLA} title="Dummy 6" />
        <Program icon={Icons.FLAG} title="Dummy 7" />
        <Program icon={Icons.AIRPLANE} title="Dummy 8" />
      </Carousel>
    </MainLayout>
  );
};
