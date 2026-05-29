import React from 'react';
import './CodingProfiles.css';
import { SiLeetcode as LeetCode, SiGeeksforgeeks as Gfg } from 'react-icons/si';
import { FaExternalLinkAlt as ExternalIcon } from 'react-icons/fa';
import ScrollSection from './ScrollSection';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      handle: "kothavivek55",
      link: "https://leetcode.com/u/kothavivek55/",
      icon: LeetCode,
      color: "#FFA116",
      stats: "Solved 220+ problems with focus on arrays, strings, and fundamental algorithms."
    },
    {
      name: "GeeksforGeeks",
      handle: "kothavivek55",
      link: "https://www.geeksforgeeks.org/user/kothavivek55/",
      icon: Gfg,
      color: "#2F8D46",
      stats: "Solved 220+ problems, strengthening data structures and problem-solving fundamentals."
    }
  ];

  return (
    <section id="coding-profiles" style={{ width: '100%' }}>
      <ScrollSection direction="left">
        <h2 className="section-title">Coding Profiles</h2>
        <div className="profiles-grid">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <a 
                href={profile.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-card glass-card" 
                key={index}
                style={{ '--hover-color': profile.color }}
              >
                <div className="profile-icon-wrapper" style={{ color: profile.color, background: `${profile.color}15` }}>
                  <Icon size={36} />
                </div>
                <div className="profile-content">
                  <h3>{profile.name}</h3>
                  <p className="profile-handle">@{profile.handle}</p>
                  <p className="profile-stats">{profile.stats}</p>
                </div>
                <div className="profile-action">
                  <ExternalIcon size={18} />
                </div>
              </a>
            );
          })}
        </div>
      </ScrollSection>
    </section>
  );
};

export default CodingProfiles;
