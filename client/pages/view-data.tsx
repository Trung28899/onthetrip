/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import DataView from "@/modules/view-data/View";
import type { PhotoData } from "../modules/view-data/types/ViewDataTypes";
import { toastError } from "@/modules/common/utils/toast_helper";
import useLoading from "@/modules/common/hooks/useLoading";
import { useRedux } from "@/store/useRedux";
import { useRouter } from "next/router";
import { graphQLClient } from "../lib/graphql";
import { GetStaticProps } from "next";
import { PHOTOS_QUERY } from "@/modules/view-data/querries/photos";

interface Props {
  data: PhotoData[];
  errorMessage: string;
}

interface DataReponse {
  photos: {
    data: PhotoData[];
  };
}

function ViewDataRoute({ data, errorMessage }: Props) {
  const { loading_count, resetLoading } = useLoading();
  const { state } = useRedux();
  const router = useRouter();
  const { authenticated } = state.authObject;

  useEffect(() => {
    if (!authenticated) router.push("/");
  }, [authenticated, router]);

  useEffect(() => {
    if (errorMessage) toastError(errorMessage);
    if (loading_count > 0) resetLoading();
  }, []);

  return <DataView data={data} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res: DataReponse = await graphQLClient.request(PHOTOS_QUERY);

    return {
      props: {
        data: res.photos.data,
        errorMessage: "",
      },
    };
  } catch (error: any) {
    return {
      props: {
        data: [],
        errorMessage: "GraphQL Error",
      },
    };
  }
};

export default ViewDataRoute;
