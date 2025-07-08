import { useState } from "react";
import { Button } from "../button";
import { usePathname, useRouter } from "next/navigation";

const NMTablePagination = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const pathName = usePathname();
  //   const totalPage = 10;
  const handlePrev = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      router.push(`${pathName}?page=${currentPage + 1}`);
    }
  };
  const handleNext = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push(`${pathName}?page=${currentPage - 1}`);
    }
  };
  return (
    <div className="flex justify-center gap-2">
      <Button
        variant="outline"
        onClick={handleNext}
        disabled={currentPage == 1}
      >
        Previous
      </Button>
      <>
        {[...Array(totalPage)].map((_, idx) => (
          <Button
            variant={currentPage === idx + 1 ? "default" : "outline"}
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </Button>
        ))}
      </>
      <Button
        variant="outline"
        onClick={handlePrev}
        disabled={currentPage === totalPage}
      >
        Next
      </Button>
    </div>
  );
};

export default NMTablePagination;
