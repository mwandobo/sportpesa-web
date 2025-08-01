"use client"

import ProtectedRoute from '@/components/authentication/protected-route'
import PageHeader from '@/components/header/page-header'
import React from 'react'
import {usePageDataHook} from "@/hooks/page-render-hooks/use-page-data.hook";
import ContractExtensionView from "@/app/contracts/fragments/contract-extension-view";

interface Props {
    contract?: any
    isHideAdd?: boolean
}

function ContractExtension({
                               contract,
                               isHideAdd
                           }: Props) {
    const formInputs = [
        {
            name: 'title',
            type: 'text',
            label: "Extension Title",
            value: '',
            required: true,
            isError: false,
            errorMessage: ''
        },
        {
            name: 'amount',
            type: 'text',
            label: "Amount",
            value: '',
            required: true,
            isError: false,
            errorMessage: ''
        },
        {
            name: 'extendedDate',
            type: 'date',
            label: 'Extended Date',
            value: '',
            required: true,
            isError: false,
            errorMessage: '',
            minDate: contract?.endDate
        },
        {
            name: 'description',
            type: 'textArea',
            label: 'Description',
            value: '',
            required: true,
            isError: false,
            errorMessage: ''
        },
        {
            name: 'file',
            type: 'file',
            label: "Upload File",
            value: '',
            placeholder: "upload file",
            required: true,
            isError: false,
            errorMessage: ''
        },
    ]

    const columns = [
        {
            id: 'title',
            numeric: false,
            disablePadding: false,
            label: 'File Title',
        },
        {
            id: 'amount',
            numeric: false,
            disablePadding: false,
            label: 'Amount',
        },
        {
            id: 'extendedDate',
            numeric: false,
            disablePadding: false,
            label: 'Extended Date',
            required: true,
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: false,
            label: 'Status',
        },
    ]

    const url = `contracts/${contract?.id}/extensions`
    const permission = 'contract_extension'

    const {
        loading,
        createdForm,
        handleClick,
        tabular

    } = usePageDataHook({
        columns: columns,
        formInputs: formInputs,
        url: url,
        modalTitle: 'Contract Extensions',
        viewUrl: '',
        state_properties: [],
        isHideShow: false,
        isApiV2: true,
        isFormData: true,
        sliderComponent: ContractExtensionView,
        permission
    })

    return (
        <ProtectedRoute
            permission={`${permission}_read`}
            isLoading={loading}
        >
            <PageHeader
                handleClick={handleClick}
                subHeader='Contract Extensions / List'
                links={[{name: 'Contract Extensions', linkTo: `/contracts/`}]}
                isHideAdd={isHideAdd}
                permission={`${permission}_create`}
            />

            {tabular()}
            {createdForm()}
        </ProtectedRoute>
    )
}

export default ContractExtension