import ContentLoader from "react-content-loader";

const LoadingPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 md:mt-16 lg:mt-28">
        <ContentLoader
          className="lg:w-[2000px] md:h-[600px]"
          viewBox="0 0 700 300"
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb">
          <rect x="285" y="30" rx="3" ry="3" width="100" height="25" />
          <rect x="25" y="70" rx="3" ry="3" width="630" height="25" />
          <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
          <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
          <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
          <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
          <rect x="25" y="258" rx="3" ry="3" width="630" height="25" />
          <rect x="376" y="120" rx="3" ry="3" width="270" height="22" />
          <rect x="376" y="170" rx="3" ry="3" width="270" height="22" />
          <rect x="376" y="220" rx="3" ry="3" width="270" height="22" />
          <rect x="25" y="120" rx="3" ry="3" width="270" height="22" />
          <rect x="25" y="170" rx="3" ry="3" width="270" height="22" />
          <rect x="25" y="220" rx="3" ry="3" width="270" height="22" />
        </ContentLoader>
      </div>
      
    </div>
  );
};

export default LoadingPage;
