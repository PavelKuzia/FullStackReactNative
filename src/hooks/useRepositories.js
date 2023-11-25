import { useState, useEffect } from 'react';

const useRepositories = async () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch('http://192.168.0.105:5000/api/repositories');
    const json = await response.json();
    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
}

export default useRepositories;