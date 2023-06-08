const VideoCamOff = ({ fillColor }: { fillColor: string }) => {
  return (
    <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.858 11.741a.844.844 0 0 0 .29-.305.813.813 0 0 0 .104-.404v-6.3a.926.926 0 0 0-.116-.398.956.956 0 0 0-.278-.312.712.712 0 0 0-.788 0l-2.756 1.419a2.337 2.337 0 0 0-.715-1.598 2.482 2.482 0 0 0-1.648-.693H8.037l8.663 8.668c0-.077.078-.077.158-.077Zm.157 2.679-3.78-3.782L5.753 3.15 2.84.236A.745.745 0 0 0 2.29 0a.765.765 0 0 0-.552.236.778.778 0 0 0-.237.552.758.758 0 0 0 .237.552l1.811 1.81a2.449 2.449 0 0 0-1.48.812A2.312 2.312 0 0 0 1.5 5.515v4.728c-.006.31.05.618.167.907.117.29.291.553.513.777.217.219.479.393.768.51.29.116.601.174.915.17h7.088c.275.01.55-.034.806-.128.258-.095.492-.24.69-.424l3.466 3.467a.762.762 0 0 0 .551.228.783.783 0 0 0 .551-.228.785.785 0 0 0 .229-.552.785.785 0 0 0-.229-.552v.002Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default VideoCamOff;