"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;

  index: number;

  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

interface A11yProps {
  index: number;
  id: string;
  "aria-controls": string;
}

function a11yProps(index: number): A11yProps {
  return {
    index,
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="Databases"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#02E025",
                color: "black",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            label="Mobile"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#02E025",
                color: "black",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            label="Frontend"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#02E025",
                color: "black",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            label="Server"
            {...a11yProps(3)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#02E025",
                color: "black",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            label="Devops"
            {...a11yProps(4)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#02E025",
                color: "black",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            label="Backend"
            {...a11yProps(5)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#02E025",
                color: "black",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            label="CMS"
            {...a11yProps(6)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#02E025",
                color: "black",
                borderRadius: "5px",
              },
            }}
          />
        </Tabs>
        <div
          style={{
            backgroundImage: "url('/images/tab-box-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "28px",
          }}
          className="rounded-bl-xl rounded-br-xl rounded-tr-xl"
        >
          <TabPanel value={value} index={0}>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/amazon-aurora.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="Amazon Aurora"
                    priority
                  />
                </div>
                <p className="text-white">Amazon Aurora</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/aws.png"
                    width={72}
                    height={72}
                    className="w-1/2"
                    alt="AWS RDS"
                  />
                </div>
                <p className="text-white">AWS RDS</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mongodb.png"
                    width={72}
                    height={72}
                    className="w-[20px]"
                    alt="MongoDB"
                  />
                </div>
                <p className="text-white">MongoDB</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mysql.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="MySQL"
                  />
                </div>
                <p className="text-white">MySQL</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/amazon-aurora.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="Amazon Aurora"
                    priority
                  />
                </div>
                <p className="text-white">Amazon Aurora</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/aws.png"
                    width={72}
                    height={72}
                    className="w-1/2"
                    alt="AWS RDS"
                  />
                </div>
                <p className="text-white">AWS RDS</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mongodb.png"
                    width={72}
                    height={72}
                    className="w-[20px]"
                    alt="MongoDB"
                  />
                </div>
                <p className="text-white">MongoDB</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mysql.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="MySQL"
                  />
                </div>
                <p className="text-white">MySQL</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/amazon-aurora.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="Amazon Aurora"
                    priority
                  />
                </div>
                <p className="text-white">Amazon Aurora</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/aws.png"
                    width={72}
                    height={72}
                    className="w-1/2"
                    alt="AWS RDS"
                  />
                </div>
                <p className="text-white">AWS RDS</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mongodb.png"
                    width={72}
                    height={72}
                    className="w-[20px]"
                    alt="MongoDB"
                  />
                </div>
                <p className="text-white">MongoDB</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mysql.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="MySQL"
                  />
                </div>
                <p className="text-white">MySQL</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/amazon-aurora.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="Amazon Aurora"
                    priority
                  />
                </div>
                <p className="text-white">Amazon Aurora</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/aws.png"
                    width={72}
                    height={72}
                    className="w-1/2"
                    alt="AWS RDS"
                  />
                </div>
                <p className="text-white">AWS RDS</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mongodb.png"
                    width={72}
                    height={72}
                    className="w-[20px]"
                    alt="MongoDB"
                  />
                </div>
                <p className="text-white">MongoDB</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mysql.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="MySQL"
                  />
                </div>
                <p className="text-white">MySQL</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/amazon-aurora.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="Amazon Aurora"
                    priority
                  />
                </div>
                <p className="text-white">Amazon Aurora</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/aws.png"
                    width={72}
                    height={72}
                    className="w-1/2"
                    alt="AWS RDS"
                  />
                </div>
                <p className="text-white">AWS RDS</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mongodb.png"
                    width={72}
                    height={72}
                    className="w-[20px]"
                    alt="MongoDB"
                  />
                </div>
                <p className="text-white">MongoDB</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mysql.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="MySQL"
                  />
                </div>
                <p className="text-white">MySQL</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/amazon-aurora.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="Amazon Aurora"
                    priority
                  />
                </div>
                <p className="text-white">Amazon Aurora</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/aws.png"
                    width={72}
                    height={72}
                    className="w-1/2"
                    alt="AWS RDS"
                  />
                </div>
                <p className="text-white">AWS RDS</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mongodb.png"
                    width={72}
                    height={72}
                    className="w-[20px]"
                    alt="MongoDB"
                  />
                </div>
                <p className="text-white">MongoDB</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mysql.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="MySQL"
                  />
                </div>
                <p className="text-white">MySQL</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full shadow-sm w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/amazon-aurora.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="Amazon Aurora"
                    priority
                  />
                </div>
                <p className="text-white">Amazon Aurora</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#FEC327] rounded-full border border-border w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/aws.png"
                    width={72}
                    height={72}
                    className="w-1/2"
                    alt="AWS RDS"
                  />
                </div>
                <p className="text-white">AWS RDS</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="bg-[#13AA52] rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mongodb.png"
                    width={72}
                    height={72}
                    className="w-[20px]"
                    alt="MongoDB"
                  />
                </div>
                <p className="text-white">MongoDB</p>
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="rounded-full w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src="/images/mysql.png"
                    width={72}
                    height={72}
                    className="w-full"
                    alt="MySQL"
                  />
                </div>
                <p className="text-white">MySQL</p>
              </div>
            </div>
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}
