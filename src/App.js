import "./App.css";
import React from "react";

function App() {
  const siteList = [
    {
      id: "1",
      name: "google",
      url: "www.google.com",
      subData: [
        {
          id: "2",
          name: "walla",
          url: "www.walla.co.il",
        },
        {
          id: "3",
          name: "ynet",
          url: "www.ynet.co.il",
          subData: [
            {
              id: "4",
              name: "mako",
              url: "www.mako.co.il",
            },
            {
              id: "5",
              name: "google",
              url: "www.google.com",
            },
            {
              id: "6",
              name: "walla",
              url: "www.walla.co.il",
            },
          ],
        },
        {
          id: "7",
          name: "google",
          url: "www.google.com",
        },
      ],
    },
    {
      id: "8",
      name: "ynet",
      url: "www.ynet.co.il",
      subData: [
        {
          id: "9",
          name: "walla",
          url: "www.walla.co.il",
        },
        {
          id: "10",
          name: "google",
          url: "www.google.com",
          subData: [
            {
              id: "11",
              name: "ynet",
              url: "www.ynet.co.il",
              subData: [
                {
                  id: "12",
                  name: "walla",
                  url: "www.walla.co.il",
                },
                {
                  id: "13",
                  name: "google",
                  url: "www.google.com",
                },
                {
                  id: "14",
                  name: "mako",
                  url: "www.mako.co.il",
                },
              ],
            },
            {
              id: "15",
              name: "google",
              url: "www.google.com",
            },
            {
              id: "16",
              name: "mako",
              url: "www.mako.co.il",
            },
          ],
        },
        {
          id: "17",
          name: "walla",
          url: "www.walla.co.il",
          subData: [
            {
              id: "18",
              name: "ynet",
              url: "www.ynet.co.il",
            },
            {
              id: "19",
              name: "google",
              url: "www.google.com",
            },
            {
              id: "20",
              name: "walla",
              url: "www.walla.co.il",
            },
          ],
        },
        {
          id: "21",
          name: "mako",
          url: "www.mako.co.il",
        },
      ],
    },
  ];

  return (
    <div className="App">
      {siteList.map((site) => (
        <div>
          <div className="first-div" key={site.id}>
            <div className="inner-first-div">
              <div>Id: {site.id}</div>
              Site Name: {site.name}
              <a href={`http://${site.url}`} target="_blank" rel="noreferrer">
                Site Url: {site.name}
              </a>
            </div>
            {site.subData ? (
              site.subData.map((subSite) => (
                <div className="second-div" key={subSite.id}>
                  <div className="inner-second-div">
                    <div>Id: {subSite.id}</div>
                    Site Name: {subSite.name}
                    <a
                      href={`http://${subSite.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site Url: {subSite.name}
                    </a>
                  </div>
                  {subSite.subData ? (
                    subSite.subData.map((secSubSite) => (
                      <div className="third-div" key={secSubSite.id}>
                        <div className="inner-third-div">
                          <div>Id: {secSubSite.id}</div>
                          Site Name: {secSubSite.name}
                          <a
                            href={`http://${secSubSite.url}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Site Url: {secSubSite.name}
                          </a>
                        </div>
                        {secSubSite.subData ? (
                          secSubSite.subData.map((thridSubSite) => (
                            <div className="forth-div" key={thridSubSite.id}>
                              <div className="inner-forth-div">
                                <div>Id: {thridSubSite.id}</div>
                                Site Name: {thridSubSite.name}
                                <a
                                  href={`http://${thridSubSite.url}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Site Url: {thridSubSite.name}
                                </a>
                              </div>
                            </div>
                          ))
                        ) : (
                          <></>
                        )}
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
