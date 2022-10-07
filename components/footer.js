import React from 'react';

import Newsletter from '@components/newsletter';
import ThemeSwitch from '@components/theme-switch';
import Menu from '@components/menu';
import Icon from '@components/icon';

const Footer = ({ data = {} }) => {
  const { blocks } = data;

  const enabledBlocks = (blocks) => {
    let counter = 0;
    blocks.map((block, key) => (block.enabled ? (counter += 1) : null));
    return counter;
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className={`footer--grid blocks${enabledBlocks(blocks)}`}>
        {console.log(enabledBlocks(blocks))}
        {blocks.map((block, key) => (
          <React.Fragment key={`block-fragment${key}`}>
            {block.enabled || key === 3 ? (
              <div
                key={`block${key}`}
                className={`footer--block blocks${enabledBlocks(blocks)}`}
              >
                {block.title && <p className="is-h3">{block.title}</p>}

                {block.menu?.items && (
                  <Menu items={block.menu.items} className="menu-footer" />
                )}

                {block.newsletter && <Newsletter data={block.newsletter} />}

                {block.social && (
                  <div className="menu-social" key={`social-div${key}`}>
                    {block.social.map((link, key) => (
                      <a
                        key={`social-link${key}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name={link.icon} />
                      </a>
                    ))}
                  </div>
                )}

                {/* Put our extras in the last block */}
                {key === 3 && (
                  <div className="footer--extras">
                    <ThemeSwitch />

                    <div className="footer--disclaimer">
                      <p>
                        &copy; {new Date().getFullYear()}. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
