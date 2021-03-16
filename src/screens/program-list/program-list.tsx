import React from "react";
import "./program-list.scss";
import { MainLayout } from "../../layouts/main/main";
import { Program } from "../../components/program/program";
import { Icons } from "../../components/icon/icon";
import { Carousel } from "../../components/carousel/carousel";
import { Pulldown } from "../../components/pulldown/pulldown";

export interface IProgram {
  icon: Icons;
  title: string;
  subtitle?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export interface IProgramListProps {
  /**
   * An array of programs to render
   */
  programs: IProgram[];
}

/**
 * Program list screen
 */
export const ProgramList: React.FunctionComponent<IProgramListProps> = ({programs = []}) => {
  return (
    <MainLayout>
      <Carousel className="program-list-carousel">
        {programs.map((program, programIndex) => (
          <Program
            icon={program.icon}
            title={program.title}
            subtitle={program.subtitle}
            onClick={program.onClick}
            key={programIndex}
          />
        ))}
      </Carousel>
      <Pulldown>
        Lorem ipsum dolor sit amet...
      </Pulldown>
    </MainLayout>
  );
};
