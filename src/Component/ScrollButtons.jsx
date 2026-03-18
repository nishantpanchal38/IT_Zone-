import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setScrolling } from '../redux/scrollSlice'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { setScrolling } from '../Redux/SidebarReducer';

function ScrollButtons() {
  const dispatch = useDispatch();
  const { showTop, showBottom } = useSelector((state) => state.scroll);

  useEffect(() => {
    const handleScroll = () => {
        // Get current scroll position and window dimensions to determine button visibility
        // window.scrollY → current vertical scroll position, How many pixels the page is scrolled vertically from the top
      const scrollTop = window.scrollY;

    //   The height of the visible browser window (viewport) in pixels.
    // This tells you how much of the page is currently visible without scrolling.
      const windowHeight = window.innerHeight;

        // Total height of the whole page (including hidden part) in pixels. This is the entire height of the content, not just what's visible.
    //   document → the whole HTML page
    // document.documentElement → the <html> element
    // scrollHeight → total height of content inside the page
        const fullHeight = document.documentElement.scrollHeight;

        // Update the Redux state to show/hide buttons based on scroll position
      dispatch(setScrolling({
        // If you scroll more than 100px, show the “Scroll to Top” button
        showTop: scrollTop > 100,

        // If you are not near the bottom (100px from the end), show the “Scroll to Bottom” button
        // showBottom: scrollTop + windowHeight < fullHeight - 100
      }));
    };

    // window → the browser window
    // addEventListener → listens for an event (like scroll) and runs the provided function (handleScroll) when that event occurs.
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts to prevent memory leaks and unnecessary event handling.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]); // ✅ correct placement

  // ✅ Move outside useEffect
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

//   const scrollToBottom = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth"
//     });
//   };

  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-3 z-50">

      {showTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-emerald-400 text-white shadow-lg hover:bg-emerald-300 transition"
        >
          <FaArrowUp />
        </button>
      )}

      {/* {showBottom && (
        <button
          onClick={scrollToBottom}
          className="p-3 rounded-full bg-emerald-400 text-white shadow-lg hover:bg-emerald-300 transition"
        >
          <FaArrowDown />
        </button>
      )} */}

    </div>
  );
}

export default ScrollButtons;