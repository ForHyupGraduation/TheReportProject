import React, { useEffect, useState } from "react";

const Regist = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  useEffect(() => {
    setIsLoading(false);
  }, []);
  
  return <div>회원가입 페이지 입니다.</div>;
};

export default Regist;
