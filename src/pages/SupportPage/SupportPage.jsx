import {
  CardGridLayout,
  FlexLayoutColumn,
  GridLayout,
  StandardLayout,
} from "@components/Layouts/Layouts";
import { PageDivider } from "@components/CustomComponents/CustomComponents";
import {
  MainContainer,
  TransparentLargeContainer,
} from "@components/LargeContainers/LargeContainers";
import {
  CorbenWhiteCurvyTitle,
  MontserratUnorderedList,
} from "@components/PageTitles/PageTitles";
import Section from "@components/Section/Section";
import SharpLightShadowCard from "./SupportPageComponents/SharpLightShadowCard";
import { GradientOrderedList } from "@components/PageTitles/PageLists";

const supportNeeded_ALC_data = {
  title: "Aeta Learning Center Maintenance",
  info: "This encompasses expenses for reinforcing critical elements of the structure and the upkeep of existing physical resources within the Aeta Learning Center, all aimed at enhancing its suitability for learning.",
};

const supportNeeded_data = [
  {
    backgroundColor: "#fffbe6",
    title: "Weekly Program Costs",
    info: "This covers the overall expenses incurred during the weekly implementation of the Adult Literacy Program. It includes costs related to volunteer transportation, meals, and the reproduction of necessary materials.",
  },
  {
    backgroundColor: "#fffbe6",
    title: "Learning Materials Development",
    info: "This covers the creation and production of learning materials tailored to meet the unique needs and cultural context of the community.",
  },
  {
    backgroundColor: "#fffbe6",
    title: "Program Development",
    info: "This involves assisting in the development of a context-specific functional literacy and leadership curriculum designed for both young and adult learners.",
  },
  {
    backgroundColor: "#fffbe6",
    title: "Other Community Development Initiatives",
    info: "This encompasses various initiatives aimed at benefiting the community, including sustainable medical services for community members, support for community livelihood projects, and assistance for the educational requirements of young learners.",
  },
];

const improvementTasks = [
  "Upscaling of the solar power system",
  "Repainting",
  "Wall finishing",
  "Provision of tables and chairs",
  "Acquisition of storage boxes for learning materials",
  "Purchase of file cabinets",
  "Procurement of office supplies",
  "Acquisition of a printer",
  "Installation of a sound system",
  "Provision of electric fans",
];

const SupportPage = () => {
  return (
    <StandardLayout>
      <MainContainer>
        <Section backgroundColor="#c0eba6">
          <div className="headerSpace"></div>
          <TransparentLargeContainer>
            <CorbenWhiteCurvyTitle title="Support Needed" />
            <FlexLayoutColumn>
              <CardGridLayout sizeOfCard="100%">
                <SharpLightShadowCard
                  title={supportNeeded_ALC_data.title}
                  info={supportNeeded_ALC_data.info}
                >
                  {/* "Specific Needs of the ALC:" */}
                  <MontserratUnorderedList
                    context="Specific Needs of the ALC:"
                    list={improvementTasks}
                  />
                </SharpLightShadowCard>
              </CardGridLayout>
              <GridLayout>
                <img
                  src="/images/SupportNeededPage/AetaPersonLearningInALC.png"
                  alt="Liwanag at Dunong: Image of an Aeta Person Learning in the ALC"
                  className="pageImage"
                />
                <img
                  src="/images/SupportNeededPage/MaintenanceOfALC.png"
                  alt="Liwanag at Dunong: Image of the Maintenance of the ALC"
                  className="pageImage"
                />
              </GridLayout>
              <CardGridLayout sizeOfCard="400px">
                {supportNeeded_data.map((data, index) => (
                  <SharpLightShadowCard
                    key={index}
                    backgroundColor={data.backgroundColor}
                    title={data.title}
                    info={data.info}
                  />
                ))}
              </CardGridLayout>
            </FlexLayoutColumn>
          </TransparentLargeContainer>
        </Section>
        <PageDivider />
      </MainContainer>
    </StandardLayout>
  );
};

export default SupportPage;
