

const TrustedCompanies = () => {
  const companies = [
    { name: 'Partner 1', logo: 'https://static.wixstatic.com/media/ca51e6_c10570da38c842d7805b7af7b8dd2391~mv2.png/v1/fill/w_161,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_c10570da38c842d7805b7af7b8dd2391~mv2.png' },
    { name: 'Partner 2', logo: 'https://static.wixstatic.com/media/ca51e6_040ad7e5cb0c4c5aae8a70a7fd3b1c09~mv2.png/v1/fill/w_181,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_040ad7e5cb0c4c5aae8a70a7fd3b1c09~mv2.png' },
    { name: 'Partner 3', logo: 'https://static.wixstatic.com/media/ca51e6_11bc211548d3425c89b88f955825eb84~mv2.png/v1/fill/w_168,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_11bc211548d3425c89b88f955825eb84~mv2.png' },
    { name: 'Partner 4', logo: 'https://static.wixstatic.com/media/ca51e6_5e930325772a4c1484d5b871f419d5f6~mv2.png/v1/fill/w_95,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_5e930325772a4c1484d5b871f419d5f6~mv2.png' },
    { name: 'Partner 5', logo: 'https://static.wixstatic.com/media/ca51e6_559cb5868a5c46c3b7b4b1589d4dc015~mv2.png/v1/fill/w_162,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_559cb5868a5c46c3b7b4b1589d4dc015~mv2.png' },
    { name: 'Partner 6', logo: 'https://static.wixstatic.com/media/ca51e6_1833157c1fc94219a4144e657c3e5308~mv2.jpg/v1/fill/w_170,h_85,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_1833157c1fc94219a4144e657c3e5308~mv2.jpg' },
    { name: 'Partner 7', logo: 'https://static.wixstatic.com/media/ca51e6_fc6f6ba2d05a4771b3b70c5b5236b1d0~mv2.png/v1/fill/w_216,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_fc6f6ba2d05a4771b3b70c5b5236b1d0~mv2.png' },
    { name: 'Partner 8', logo: 'https://static.wixstatic.com/media/ca51e6_80254cd44ab74ef487c6c4a554d33785~mv2.png/v1/fill/w_162,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca51e6_80254cd44ab74ef487c6c4a554d33785~mv2.png' },
  ];

  return (
    <section className="py-16 bg-background border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of leading companies who trust us with their business processes
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                <div className="w-48 h-24 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="max-w-[11rem] max-h-[5.5rem] object-contain partner-logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;